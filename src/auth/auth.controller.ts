import { Controller, Post } from "@nestjs/common"
import { Body, HttpCode } from "@nestjs/common"
import { UseGuards } from "@nestjs/common/decorators"
import { User } from "@prisma/client"
import { AuthService } from "./auth.service"
import { GetUser } from "./decorator/param.decorator"
import { LoginDto, SignupDto } from "./dto"
import { JwtGaurd, RefreshJwtGaurd } from "./Guard/jwtGaurd"

@Controller("auth")
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post("login")
	@HttpCode(200)
	async signinLocal(@Body() dto: LoginDto) {
		return this.authService.signinLocal(dto)
	}

	@Post("signup")
	signUpLocal(@Body() dto: SignupDto) {
		return this.authService.signUpLocal(dto)
	}

	@UseGuards(JwtGaurd)
	@Post("logout")
	logout(@GetUser() user: User) {
		return this.authService.logout(user)
	}

	@UseGuards(RefreshJwtGaurd)
	@Post("refresh")
	refresh(@GetUser() user: { data: User; refreshToken: string }) {
		return this.authService.refresh(user.data,user.refreshToken)
	}
}
