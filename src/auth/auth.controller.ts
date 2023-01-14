import { Controller, Post } from "@nestjs/common"
import { Body, HttpCode } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { LoginDto, SignupDto } from "./dto"

@Controller("auth")
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post("login")
	@HttpCode(200)
	async signinLocal(@Body() dto: LoginDto) {
		return this.authService.signinLocal(dto)
	}

	@Post("signup")
	signUpLocal(@Body() dto:SignupDto) {
		return this.authService.signUpLocal(dto)
	}
}
