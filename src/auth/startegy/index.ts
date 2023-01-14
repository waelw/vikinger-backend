import { Injectable } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { ExtractJwt, Strategy } from "passport-jwt"
import { ConfigService } from "@nestjs/config"
import { PrismaClient } from "@prisma/client"
import { PrismaService } from "src/prisma/prisma.service"

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
	constructor(config: ConfigService, private prisma: PrismaService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: config.get("JWT_SECRET"),
		})
	}

	async validate(payload: { sub: number; email: string }) {
		const {password,...others} = await this.prisma.user.findUniqueOrThrow({
			where: {
				id: payload.sub,
			},

		})
		return others
	}
}
