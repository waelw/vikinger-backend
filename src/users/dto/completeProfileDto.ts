import { Transform, Type } from "class-transformer"
import {
	ArrayNotEmpty,
	Equals,
	IsArray,
	IsDate,
	IsEmail,
	IsEnum,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
	IsUrl,
	MaxLength,
	ValidateIf,
	ValidateNested,
} from "class-validator"
import { CityExists } from "../decorator/cityExistsAndBelongToTheCountry"
import { CountryExists } from "../decorator/countryExists.decorator"
import { Status, EentertainmentTypes } from "prisma/prisma-client"
export class CompleteProfileDTO {
	@IsString()
	@IsNotEmpty()
	profileName: string

	@IsString()
	@IsNotEmpty()
	tagline: string

	@IsString()
	@MaxLength(100)
	@IsOptional()
	description?: string

	@IsString()
	@IsEmail()
	@IsOptional()
	publicEmail?: string

	@IsString()
	@IsUrl()
	@IsOptional()
	publicWebsite?: string

	@Transform(({ value }) => Number.parseInt(value))
	@CountryExists()
	@IsNotEmpty()
	country: number

	@IsNotEmpty()
	@Transform(({ value }) => Number.parseInt(value))
	@CityExists({ groups: ["country"] })
	@ValidateIf(o => !!o.country)
	city: number

	@Transform(({ value }) => new Date(value))
	@IsDate()
	@IsNotEmpty()
	birthday: string

	@IsString()
	@IsOptional()
	occupation?: string

	@IsString()
	@IsNotEmpty()
	@IsEnum(Status)
	status: Status

	@IsString()
	@IsNotEmpty()
	birthplace: string
}

export class CompleteInterestsDTO {
	@IsNotEmpty()
	@IsNumber({}, { message: "each value must be a number", each: true })
	interests: number[]

	@IsNotEmpty()
	@IsArray()
	@ArrayNotEmpty()
	@ValidateNested({ each: true })
	@Type(() => NewInterests)
	new: NewInterests[]
}

class NewInterests {
	@IsNotEmpty()
	@IsString()
	name: string

	@IsNotEmpty()
	@IsEnum(EentertainmentTypes)
	type: EentertainmentTypes
}
