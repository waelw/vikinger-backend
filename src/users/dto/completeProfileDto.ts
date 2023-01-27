import { Transform } from "class-transformer"
import {
	Equals,
	IsDate,
	IsDateString,
	IsEmail,
	IsEnum,
	IsNotEmpty,
	IsOptional,
	IsString,
	IsUrl,
	MaxLength,
	ValidateIf,
} from "class-validator"
import { CityExists } from "../decorator/cityExistsAndBelongToTheCountry"
import { CountryExists } from "../decorator/countryExists.decorator"
import {Status} from "prisma/prisma-client"
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
	@CityExists({groups:["country"]})
	@ValidateIf(o => !!o.country)
	city: number

	@Transform(({value})=>new Date(value))
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
