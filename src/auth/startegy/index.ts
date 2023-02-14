import { Injectable } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { ExtractJwt, Strategy } from "passport-jwt"
import { ConfigService } from "@nestjs/config"
import { PrismaClient } from "@prisma/client"
import { PrismaService } from "src/prisma/prisma.service"
import { Request } from "express"

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
	constructor(config: ConfigService, private prisma: PrismaService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: config.get("JWT_SECRET"),
		})
	}

	async validate(payload: { sub: number; email: string }) {
		const { password, ...others } = await this.prisma.user.findUniqueOrThrow({
			where: {
				id: payload.sub,
			},
		})
		return others
	}
}

@Injectable()
export class RefreshJwtStrategy extends PassportStrategy(Strategy, "jwt-rt") {
	constructor(config: ConfigService, private prisma: PrismaService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: config.get("REFRESH_JWT_SECRET"),
			passReqToCallback: true,
		})
	}

	async validate(req: Request, payload: { sub: number; email: string }) {
		const { password, ...others } = await this.prisma.user.findUniqueOrThrow({
			where: {
				id: payload.sub,
			},
		})
		const refreshToken = req?.get('authorization')?.replace('Bearer', '').trim();
		return { refreshToken , data: others }
	}
}
