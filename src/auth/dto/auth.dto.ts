import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator"
import { Match } from "../decorator/passwordMatch.decorator"

export class LoginDto {
	@IsNotEmpty()
	emailOrUsername: string

	@IsString()
	@IsNotEmpty()
	password: string
}

export class SignupDto {
	@IsString()
	@MaxLength(20)
	@IsNotEmpty()
	userName: string

	@IsString()
	@IsEmail()
	@IsNotEmpty()
	email: string

	@IsString()
	@IsNotEmpty()
	@MinLength(4)
	@MaxLength(20)
	@Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
		message: "Password should contain at least one lowercase letter ,one number and one uppercase letter",
	})
	password: string

	@IsString()
	@IsNotEmpty()
	@Match("password")
	confirmPassword: string
}
