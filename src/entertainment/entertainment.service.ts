import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/prisma/prisma.service"
import { EntertainmentQueryDTO } from "./DTOs"

@Injectable()
export class EntertainmentService {
	constructor(private prisma: PrismaService) {}

	async getEntertainment(dto: EntertainmentQueryDTO) {
		const entertainmentFound = await this.prisma.entertainment.findMany({
			where: {
				type: {
					equals: dto.type,
				},
			},
			take: dto.pageSize,
			skip: dto.pageSize * (dto.page - 1),
		})

		const total = await this.prisma.entertainment.count({
			where: {
				type: {
					equals: dto.type,
				},
			},
		})
		return { total, data: entertainmentFound }
	}
}
