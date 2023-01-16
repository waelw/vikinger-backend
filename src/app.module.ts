import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { UsersModule } from "./users/users.module"
import { AuthModule } from "./auth/auth.module"
import { PrismaModule } from "./prisma/prisma.module"
import { ConfigModule } from "@nestjs/config"
import { NestModule } from "@nestjs/common/interfaces/modules"
import { MiddlewareConsumer } from "@nestjs/common/interfaces/middleware"
import { CountryModule } from './country/country.module';

@Module({
	imports: [UsersModule, AuthModule, PrismaModule, ConfigModule.forRoot({ isGlobal: true }), CountryModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
