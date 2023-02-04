import { EentertainmentTypes } from "@prisma/client"
import { IsEnum, IsOptional, IsString } from "class-validator"
import { PaginationParams } from "src/utils"

export class EntertainmentQueryDTO extends PaginationParams {
	@IsString()
	@IsOptional()
	@IsEnum(EentertainmentTypes)
	type?: EentertainmentTypes

	@IsString()
	@IsOptional()
	query: string
}
