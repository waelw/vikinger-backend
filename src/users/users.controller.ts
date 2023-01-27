import { Controller, Get, Post, UseGuards } from "@nestjs/common"
import { Body } from "@nestjs/common/decorators"
import { User } from "@prisma/client"
import { GetUser } from "src/auth/decorator/param.decorator"
import { JwtGaurd } from "src/auth/Guard/jwtGaurd"
import { PrismaService } from "src/prisma/prisma.service"
import { CompleteProfileDTO } from "./dto/completeProfileDto"

import { UsersService } from "./users.service"
@UseGuards(JwtGaurd)
@Controller("")
export class UsersController {
	constructor(private readonly usersService: UsersService, private prisma: PrismaService) {}
	@Get("me")
	async getUser(@GetUser() user: User) {
		const { password, ...retrievedUser } = await this.prisma.user.findUnique({
			where: {
				id: user.id,
			},
		})

		return retrievedUser
	}

	@Post("users/profile")
	async completeUserProdile(@GetUser() user: Omit<User, "password">, @Body() completeProfileDTO: CompleteProfileDTO) {
		console.log("test")
		return this.usersService.completeProfile(user, completeProfileDTO)
	}
}
