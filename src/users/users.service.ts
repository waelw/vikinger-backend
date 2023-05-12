import { Injectable } from "@nestjs/common"
import { Platform, User } from "@prisma/client"
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
				birthday: new Date(completeProfileDTO.birthday),
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

		await this.prisma.job.deleteMany({
			where:{
				userId:user.id
			}
		})



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
	) {
		const { links } = data
		const strippedRedundantLinks = links.reduce<
			Partial<{ [key in Platform]: string }>
		>((prev, curr) => {
			return {
				...prev,
				[curr.platform]: curr.link,
			}
		}, {})
		// check if any existing
		const userLinks = await this.prisma.socialLinks.findMany({
			where: {
				userId: user.id,
			},
		})

		console.log({
			userLinks,
		})
		const userLinksToUpdate = userLinks.filter(link =>
			Object.keys(strippedRedundantLinks).includes(link.platform),
		)
		//update the exsiting

		await Promise.all(
			userLinksToUpdate.map(link =>
				this.prisma.socialLinks.update({
					where: {
						id: link.id,
					},
					data: {
						link: strippedRedundantLinks[link.platform],
					},
				}),
			),
		)

		//add the non-exsisting
		const strippedAlreadyUpdatedLinks = { ...strippedRedundantLinks }
		const userPlatforms = userLinks.map(link => link.platform)
		userPlatforms.forEach(platform => {
			delete strippedAlreadyUpdatedLinks[platform]
		})

		const { socialLinks } = await this.prisma.user.update({
			where: {
				id: user.id,
			},
			data: {
				socialLinks: {
					createMany: {
						data: Object.entries(strippedAlreadyUpdatedLinks).map(link => ({
							link: link[1],
							platform: link[0],
						})) as { link: string; platform: Platform }[],
					},
				},
			},
			include: {
				socialLinks: true,
			},
		})

		//respond with new user links

		return socialLinks.map(({ link, platform }) => ({ link, platform }))
	}
}
