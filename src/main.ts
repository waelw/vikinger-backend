import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { TransformResponseInterceptor } from "./TransformResponseInterceptor"
import VP from "./modifiedValidationPipr"
import { HttpExceptionFilter } from "./htttp.filter"
import { useContainer } from "class-validator"
import * as express from "express"

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.setGlobalPrefix("api")
	app.useGlobalInterceptors(new TransformResponseInterceptor())
	app.useGlobalPipes(VP)
	app.useGlobalFilters(new HttpExceptionFilter())
	app.enableCors({
		origin: "*",
		credentials: true,
	})
	app.use(express.json())
	app.use(express.urlencoded({ extended: true }))
	useContainer(app.select(AppModule), { fallbackOnErrors: true })
	await app.listen(process.env.PORT || 3000)
}
bootstrap()
