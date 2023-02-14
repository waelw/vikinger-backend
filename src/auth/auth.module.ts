import { Module } from "@nestjs/common"
import { JwtModule } from "@nestjs/jwt"
import { AuthController } from "./auth.controller"
import { AuthService } from "./auth.service"
import { JwtStrategy, RefreshJwtStrategy } from "./startegy"

@Module({
	imports: [JwtModule.register({})],
	providers: [AuthService,JwtStrategy,RefreshJwtStrategy],
	controllers: [AuthController],
})
export class AuthModule {}
