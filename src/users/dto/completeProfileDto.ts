import { Transform, Type } from "class-transformer"
import {
	ArrayNotEmpty, IsArray,
	IsDate,
	IsEmail,
	IsEnum, IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
	IsUrl,
	Max,
	MaxLength,
	Min,
	MinLength,
	Validate,
	ValidateIf,
	ValidateNested,
	ValidationArguments,
	ValidatorConstraint,
	ValidatorConstraintInterface
} from "class-validator"
import { EentertainmentTypes, Status } from "prisma/prisma-client"
import { CityExists } from "../decorator/cityExistsAndBelongToTheCountry"
import { CountryExists } from "../decorator/countryExists.decorator"
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
@ValidatorConstraint({ name: "GreaterThan" })
class EndYearGreaterThanStartYear implements ValidatorConstraintInterface {
	validate(value: number, validationArguments): boolean | Promise<boolean> {
		return value > validationArguments.object.year
	}
	defaultMessage?(validationArguments?: ValidationArguments): string {
		return "End Year Should be Greater than Start Year"
	}
}
export class CompleteUserJobsDTO {
	@IsNotEmpty()
	@IsArray()
	@ArrayNotEmpty()
	@ValidateNested({ each: true })
	@Type(() => Jobs)
	jobs: Jobs[]
}

class Jobs {
	@IsString()
	@IsNotEmpty()
	@MinLength(10)
	titleOrPlace: string

	@IsNumber()
	@Min(1980)
	@Max(new Date().getFullYear())
	@IsNotEmpty()
	year: number

	@IsNumber()
	@Min(1980)
	@Max(new Date().getFullYear())
	@IsNotEmpty()
	@Validate(EndYearGreaterThanStartYear)
	endYear: number

	@IsString()
	@IsOptional()
	@MinLength(25)
	description?: string
}
