import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { TransformResponseInterceptor } from "./TransformResponseInterceptor"
import VP from "./modifiedValidationPipr"

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.setGlobalPrefix("api")
	app.useGlobalInterceptors(new TransformResponseInterceptor())
	app.useGlobalPipes(VP)
	app.enableCors({
		origin: [
			'http://localhost:3000',
		  ],
		  credentials: true,
	})
	await app.listen(process.env.PORT || 3000)
}
bootstrap()
