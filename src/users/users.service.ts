import { Injectable } from "@nestjs/common"
import { User } from "@prisma/client"
import { PrismaService } from "src/prisma/prisma.service"
import {
	CompleteInterestsDTO,
	CompleteProfileDTO,
	CompleteUserJobsDTO,
	UpdateUserSocilasDTO,
} from "./dto/completeProfileDto"

@Injectable()
export class UsersService {
	constructor(private prisma: PrismaService) {}

	async completeProfile(
		user: Omit<User, "password">,
		completeProfileDTO: CompleteProfileDTO,
	) {
		const { password, ...retrievedUser } = await this.prisma.user.update({
			where: {
				id: user.id,
			},
			data: {
				...completeProfileDTO,
				city: { connect: { id: completeProfileDTO.city } },
				country: { connect: { id: completeProfileDTO.country } },
			},
		})
		return retrievedUser
	}

	async completeInterests(
		user: Omit<User, "password">,
		completeInterestsDTO: CompleteInterestsDTO,
	) {
		const { interests, new: newInterests } = completeInterestsDTO

		await this.prisma.user.update({
			where: {
				id: user.id,
			},
			data: {
				Entertainments: {
					connect: interests.map(item => ({ id: item })),
					connectOrCreate: newInterests.map(item => ({
						create: { title: item.name, type: item.type },
						where: { title: item.name },
					})),
				},
			},
		})

		return "Done Successfully'"
	}

	async completeUserProfileJobs(
		user: Omit<User, "password">,
		dto: CompleteUserJobsDTO,
	) {
		await this.prisma.user.update({
			where: {
				id: user.id,
			},
			data: {
				Jobs: {
					create: dto.jobs,
				},
			},
		})

		return "Done Successfully"
	}

	async updateUserSocialLinks(
		user: Omit<User, "password">,
		data: UpdateUserSocilasDTO,
	){

		//validated data

		// check if any existing 


		//update the exsiting

		//add the non-exsisting

		//respond with new user links

		return {data}
	}
}
