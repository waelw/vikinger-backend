import { AuthGuard } from "@nestjs/passport/dist"
export class JwtGaurd extends AuthGuard("jwt") {
	constructor() {
		super()
	}
}
