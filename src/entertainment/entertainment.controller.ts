import { Controller, Get, Query, UseInterceptors } from "@nestjs/common"
import { PaginationInterceptor } from "src/utils"
import { EntertainmentQueryDTO } from "./DTOs"
import { EntertainmentService } from "./entertainment.service"

@Controller("entertainment")
export class EntertainmentController {
	constructor(private readonly entertainmentService: EntertainmentService) {}

	@Get()
	@UseInterceptors(PaginationInterceptor)
	getAll(@Query() query: EntertainmentQueryDTO) {
		return this.entertainmentService.getEntertainment(query)
	}
}
