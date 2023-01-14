import { Controller, Get, UseGuards } from "@nestjs/common"
import { User } from "@prisma/client"
import { GetUser } from "src/auth/decorator/param.decorator"
import { JwtGaurd } from "src/auth/Guard/jwtGaurd"
import { PrismaService } from "src/prisma/prisma.service"

import { UsersService } from "./users.service"
@UseGuards(JwtGaurd)
@Controller("users")
export class UsersController {
	constructor(private readonly usersService: UsersService, private prisma: PrismaService) {}
	@Get()
	async getUsers(@GetUser() user: User) {
		const { password, ...retrievedUser } = await this.prisma.user.findUnique({
			where: {
				id: user.id,
			},
		})

		return retrievedUser
	}
}
