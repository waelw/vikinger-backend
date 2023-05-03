import { Injectable, UnprocessableEntityException } from "@nestjs/common"

import {
	registerDecorator,
	ValidationArguments,
	ValidationOptions,
	ValidatorConstraint,
	ValidatorConstraintInterface,
} from "class-validator"
import { PrismaService } from "src/prisma/prisma.service"

export function CountryExists(validationOptions?: ValidationOptions) {
	return function (object: any, propertyName: string) {
		registerDecorator({
			target: object.constructor,
			propertyName: propertyName,
			options: validationOptions,
			validator: CustomCountryValidation,
		})
	}
}

@ValidatorConstraint({ name: "country", async: true })
@Injectable()
export class CustomCountryValidation implements ValidatorConstraintInterface {
	constructor(private readonly prisma: PrismaService) {}

	async validate(value: number): Promise<boolean> {
		const country = await this.prisma.country.findFirst({
			where: {
				id: value,
			},
		})
		if (country) return true
		else return false
	}

	public defaultMessage(args: ValidationArguments) {
		return `Country doesn't exist`
	}
}
