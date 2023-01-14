import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common"
import { Observable } from "rxjs"
import { map } from "rxjs/operators"

@Injectable()
export class TransformResponseInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		return next.handle().pipe(
			map(data => {
				return {
					status: context.switchToHttp().getResponse().statusCode.toString().startsWith("2") ? "Success" : "Fail",
					message: data.message,
					data,
				}
			}),
		)
	}
}
