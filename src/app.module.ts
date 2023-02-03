import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { UsersModule } from "./users/users.module"
import { AuthModule } from "./auth/auth.module"
import { PrismaModule } from "./prisma/prisma.module"
import { ConfigModule } from "@nestjs/config"
import { CountryModule } from "./country/country.module"
import { EntertainmentModule } from "./entertainment/entertainment.module"

@Module({
	imports: [
		UsersModule,
		AuthModule,
		PrismaModule,
		ConfigModule.forRoot({ isGlobal: true }),
		CountryModule,
		EntertainmentModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
