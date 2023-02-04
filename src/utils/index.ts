import { IsInt, IsOptional } from "class-validator"
import {
	Injectable,
	NestInterceptor,
	ExecutionContext,
	CallHandler,
	createParamDecorator,
} from "@nestjs/common"
import { map, Observable } from "rxjs"
import { NextFunction, Request, Response } from "express"
import { NestMiddleware } from "@nestjs/common/interfaces"
import { Transform } from "class-transformer"

export class PaginationParams {
	@IsInt()
	@IsOptional()
	@Transform(({ value }) => Number(value))
	page?: number

	@IsInt()
	@IsOptional()
	@Transform(({ value }) => Number(value))
	pageSize?: number
}

export class PaginationInterceptor implements NestInterceptor {
	intercept(
		context: ExecutionContext,
		next: CallHandler<any>,
	): Observable<any> | Promise<Observable<any>> {
		const { query }: Request = context.switchToHttp().getRequest()
		const response: Response = context.switchToHttp().getResponse()
		const page = Number(query.page)
		const pageSize = Number(query.pageSize)
		return next.handle().pipe(
			map(v => ({
				data: v.data,
				meta: {
					total: v.total,
					page,
					pageSize,
					isLastPage: page * pageSize >= v.total,
					lastPage: Math.round(Number(v.total / pageSize)),
					nextPage: page < Math.round(Number(v.total / pageSize)) ? null : page,
					prevPage: page > 0 ? page - 1 : null,
				},
			})),
		)
	}
}

@Injectable()
export class PaginationMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
		const paginationParams: PaginationParams = {
			page: 1,
			pageSize: 10,
		}
		req.query.page =
			req.query.page && Number(req.query.page) > 1 ? req.query.page : "1"
			console.log(req.query.pageSize)
		req.query.pageSize =
			req.query.pageSize && Number(req.query.pageSize) >= 1
				? req.query.pageSize
				: "10"
		next()
	}
}
