import { HttpException, Injectable } from "@nestjs/common"
import { PrismaService } from "src/prisma/prisma.service"
import { LoginDto, SignupDto } from "./dto"
import * as argon from "argon2"
import { JwtService } from "@nestjs/jwt"
import { ConfigService } from "@nestjs/config"
import { Response } from "express"
@Injectable()
export class AuthService {
	constructor(private prismaService: PrismaService, private jwt: JwtService, private config: ConfigService) {}
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

		return { user, token }
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
						username: dto.usernameame,
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
						...(user.email === dto.email ? { email: "email already exists" } : { username: "username already exists" }),
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

		return {
			user: others,
			token,
		}
	}

	signToken(userID: number, email: string): Promise<string> {
		const payload = {
			sub: userID,
			email,
		}

		return this.jwt.signAsync(payload, { expiresIn: "15m", secret: this.config.get("JWT_SECRET") })
	}
}
