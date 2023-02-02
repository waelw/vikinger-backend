import { BadRequestException, Injectable } from "@nestjs/common"
import { NotFoundException } from "@nestjs/common/exceptions/not-found.exception"
import { PrismaClientExtensionError, PrismaClientKnownRequestError } from "@prisma/client/runtime"
import { PrismaService } from "src/prisma/prisma.service"

@Injectable()
export class CountryService {
	constructor(private prisma: PrismaService) {}

	async findAll() {
		const countires = await this.prisma.country.findMany()
		return countires
	}

	async findOne(id: number) {
		try {
			const country = await this.prisma.country.findFirstOrThrow({
				where: {
					id: id,
				},
			})
			if (!country) throw new NotFoundException()
			return country
		} catch (err) {
			if (err instanceof PrismaClientKnownRequestError) {
				if (err.code === "P2025") {
					throw new NotFoundException()
				}
			}
			console.log(err)
			throw err
		}
	}

	async findCountryCities(id: number) {
		try {
			const countryCities = await this.prisma.country.findFirstOrThrow({
				where: {
					id: id,
				},
				select: {
					city: true,
				},
			})
			return countryCities.city
		} catch (err) {
			if (err instanceof PrismaClientKnownRequestError) {
				if (err.code === "P2025") {
					throw new NotFoundException()
				}
			}
			console.log(err)
			throw new BadRequestException()
		}
	}
}
