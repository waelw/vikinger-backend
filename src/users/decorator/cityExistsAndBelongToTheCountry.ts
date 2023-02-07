import { Injectable } from "@nestjs/common"

import {
	registerDecorator, ValidationOptions,
	ValidatorConstraint,
	ValidatorConstraintInterface
} from "class-validator"
import { PrismaService } from "src/prisma/prisma.service"
import { CompleteProfileDTO } from "../dto/completeProfileDto"

export function CityExists(validationOptions?: ValidationOptions) {
	return function (object: CompleteProfileDTO, propertyName: string) {
		registerDecorator({
			target: object.constructor,
			propertyName: propertyName,
			options: validationOptions,
			validator: CityExistsValidation,
		})
	}
}

@ValidatorConstraint({ name: "city", async: true })
@Injectable()
export class CityExistsValidation implements ValidatorConstraintInterface {
	constructor(private readonly prisma: PrismaService) {}

	async validate(value: number, { object }): Promise<boolean> {
		return (
			this.checkIfCityExists(value) &&
			this.checkIfCityBelongsToCountry(value, object.country)
		)
	}

	public defaultMessage() {
		return `City doesn't exist`
	}

	private async checkIfCityExists(city) {
		return await !!this.prisma.city.findFirst({
			where: {
				id: city,
			},
		})
	}
	private async checkIfCityBelongsToCountry(city, country) {
		const countryFound = await this.prisma.country.findFirst({
			where: {
				id: country,
			},
			include: {
				city: true,
			},
		})

		if (!countryFound) return false
		return countryFound.city.map(c => c.id).includes(city)
	}
}
