import { Module } from "@nestjs/common"
import { UsersService } from "./users.service"
import { UsersController } from "./users.controller"
import { CustomCountryValidation } from "./decorator/countryExists.decorator"
import { CityExistsValidation } from "./decorator/cityExistsAndBelongToTheCountry"

@Module({
	controllers: [UsersController],
	providers: [UsersService,CustomCountryValidation,CityExistsValidation],
})
export class UsersModule {}
