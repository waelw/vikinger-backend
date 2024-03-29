import { Controller, Get, Post, UseGuards } from "@nestjs/common"
import { Body } from "@nestjs/common/decorators"
import { User } from "@prisma/client"
import { GetUser } from "src/auth/decorator/param.decorator"
import { JwtGaurd } from "src/auth/Guard/jwtGaurd"
import { PrismaService } from "src/prisma/prisma.service"
import {
	CompleteInterestsDTO,
	CompleteProfileDTO,
	CompleteUserJobsDTO,
	UpdateUserSocilasDTO,
} from "./dto/completeProfileDto"

import { UsersService } from "./users.service"
@UseGuards(JwtGaurd)
@Controller("")
export class UsersController {
	constructor(
		private readonly usersService: UsersService,
		private prisma: PrismaService,
	) {}
	@Get("me")
	async getUser(@GetUser() user: User) {
		const { password, refreshToken, Jobs, Entertainments, ...retrievedUser } =
			await this.prisma.user.findUnique({
				where: {
					id: user.id,
				},
				include: {
					city: true,
					country: true,
					Entertainments: true,
					Jobs: true,
					socialLinks: true,
				},
			})

		return { ...retrievedUser, jobs: Jobs, entertainments: Entertainments }
	}

	@Post("users/profile")
	async completeUserProdile(
		@GetUser() user: Omit<User, "password">,
		@Body() completeProfileDTO: CompleteProfileDTO,
	) {
		return this.usersService.completeProfile(user, completeProfileDTO)
	}

	@Post("users/profile/interests")
	async completeUserProfileInterests(
		@GetUser() user: Omit<User, "password">,
		@Body() completeInterestsDTO: CompleteInterestsDTO,
	) {
		return this.usersService.completeInterests(user, completeInterestsDTO)
	}

	@Post("users/profile/jobs")
	async completeUsersProfileJobs(
		@GetUser() user: Omit<User, "password">,
		@Body() completeUserJobDTO: CompleteUserJobsDTO,
	) {
		return this.usersService.completeUserProfileJobs(user, completeUserJobDTO)
	}

	@Post("users/profile/social")
	async updateUserSocialLinks(
		@GetUser() user: Omit<User, "password">,
		@Body() updateUserSocilasDTO: UpdateUserSocilasDTO,
	) {
		return this.usersService.updateUserSocialLinks(user, updateUserSocilasDTO)
	}
}
