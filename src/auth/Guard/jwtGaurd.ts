import { ForbiddenException, UnauthorizedException } from "@nestjs/common/exceptions";
import { AuthGuard } from "@nestjs/passport/dist"
export class JwtGaurd extends AuthGuard("jwt") {
	constructor() {
		super()
	}
}


export class RefreshJwtGaurd extends AuthGuard("jwt-rt") {
	constructor() {
		super()
	}

	handleRequest(err, user, info) {

		if (err || !user) {
		  throw err || new ForbiddenException();
		}
		return user;
	  }
}
