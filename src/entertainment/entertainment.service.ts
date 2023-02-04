import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/prisma/prisma.service"
import { EntertainmentQueryDTO } from "./DTOs"

@Injectable()
export class EntertainmentService {
	constructor(private prisma: PrismaService) {}

	async getEntertainment(dto: EntertainmentQueryDTO) {
		const entertainmentFound = await this.prisma.entertainment.findMany({
			where: {
				AND: {
					type: {
						equals: dto.type,
					},
					title: {
						mode: "insensitive",
						startsWith: dto.query,
					},
				},
			},
			take: dto.pageSize,
			skip: dto.pageSize * (dto.page - 1),
		})
		const total = await this.prisma.entertainment.count({
			where: {
				AND: {
					type: {
						equals: dto.type,
					},
					title: {
						mode: "insensitive",
						startsWith: dto.query,
					},
				},
			},
		})
		return { total, data: entertainmentFound }
	}
}
