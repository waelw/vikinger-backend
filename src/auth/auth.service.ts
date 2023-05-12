import { HttpException, Injectable } from "@nestjs/common"
import { PrismaService } from "src/prisma/prisma.service"
import { LoginDto, SignupDto } from "./dto"
import * as argon from "argon2"
import { JwtService } from "@nestjs/jwt"
import { ConfigService } from "@nestjs/config"
import { Response } from "express"
import { UseGuards } from "@nestjs/common/decorators"
import { JwtGaurd } from "./Guard/jwtGaurd"
import { GetUser } from "./decorator/param.decorator"
import { User } from "@prisma/client"
import { ForbiddenException } from "@nestjs/common/exceptions"
@Injectable()
export class AuthService {
	constructor(
		private prismaService: PrismaService,
		private jwt: JwtService,
		private config: ConfigService,
	) {}
	async signinLocal({ emailOrUsername, password }: LoginDto) {
		const user = await this.prismaService.user.findFirst({
			where: {
				OR: [
					{
						email: emailOrUsername,
					},
					{
						username: emailOrUsername,
					},
				],
			},
		})
		if (!user) {
			throw new HttpException("User Not Found", 400)
		}

		const passwordMatch = await argon.verify(user.password, password)
		if (!passwordMatch) {
			throw new HttpException("Password is incorrect", 400)
		}

		const token = await this.signToken(user.id, user.email)
		delete user.password
		const hashedRTToken = await argon.hash(token.rt)

		await this.prismaService.user.update({
			where: {
				id: user.id,
			},
			data: {
				refreshToken: hashedRTToken,
			},
		})
		return {
			user,
			token: token.at,
			refresh: token.rt,
		}
	}

	async signUpLocal(dto: SignupDto) {
		//retreive the user
		const user = await this.prismaService.user.findFirst({
			where: {
				OR: [
					{
						email: dto.email,
					},
					{
						username: dto.username,
					},
				],
			},
		})

		//check if the email or username already exists
		if (user)
			throw new HttpException(
				{
					status: 400,
					errors: {
						...(user.email === dto.email
							? { email: "email already exists" }
							: { username: "username already exists" }),
					},
				},
				400,
			)

		//hash pass

		const hash = await argon.hash(dto.password)

		//create the user

		const { password, ...others } = await this.prismaService.user.create({
			data: {
				email: dto.email,
				password: hash,
				username: dto.username,
			},
		})

		//generate the token
		const token = await this.signToken(others.id, others.email)

		const hashedRTToken = await argon.hash(token.rt)

		await this.prismaService.user.update({
			where: {
				id: others.id,
			},
			data: {
				refreshToken: hashedRTToken,
			},
		})
		return {
			user: others,
			token: token.at,
			refresh: token.rt,
		}
	}

	async signToken(
		userID: number,
		email: string,
	): Promise<{ at: string; rt: string }> {
		const payload = {
			sub: userID,
			email,
		}

		const at = await this.jwt.signAsync(payload, {
			expiresIn: "1h",
			secret: this.config.get("JWT_SECRET"),
		})

		const rt = await this.jwt.signAsync(payload, {
			expiresIn: "7d",
			secret: this.config.get("REFRESH_JWT_SECRET"),
		})

		return { at, rt }
	}

	async logout(user: User) {
		if (!user) throw new ForbiddenException("Access denied")
		await this.prismaService.user.updateMany({
			where: {
				id: user.id,
				refreshToken: {
					not: null,
				},
			},
			data: {
				refreshToken: null,
			},
		})
		return "Success"
	}

	async refresh(user: User, rt: string) {
		if (!user) throw new ForbiddenException("Access denied")
		if (!rt) throw new ForbiddenException("Access denied")

		const isRTAuthed = await argon.verify(user.refreshToken, rt)

		if (!isRTAuthed) throw new ForbiddenException("Access denied")

		const token = await this.signToken(user.id, user.email)

		const hashedRTToken = await argon.hash(token.rt)

		await this.prismaService.user.update({
			where: {
				id: user.id,
			},
			data: {
				refreshToken: hashedRTToken,
			},
		})
		return {
			token: token.at,
			refresh: token.rt,
		}
	}
}
