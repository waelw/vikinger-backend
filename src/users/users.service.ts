import { Injectable } from "@nestjs/common"
import { User } from "@prisma/client"
import { PrismaService } from "src/prisma/prisma.service"
import { CompleteProfileDTO } from "./dto/completeProfileDto"

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
}
