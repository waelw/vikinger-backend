import { BadRequestException, ValidationError, ValidationPipe } from "@nestjs/common"

const VP = new ValidationPipe({
	whitelist: true,
	exceptionFactory: function (validationErrors: ValidationError[]) {
		let modifiedError = {
			status: 400,
			errors: {},
		}

		validationErrors.forEach(error => {
			for (const message of Object.values(error.constraints)) {
				let errorObj
				try {
					const parsed = JSON.parse(message)
					if (!parsed && typeof parsed !== "object") {
						throw new Error("still not an object")
					}

					errorObj = parsed
				} catch (e) {
					errorObj = {
						[error.property]: message,
					}
				}

				modifiedError = { ...modifiedError, errors: { ...modifiedError.errors, ...errorObj } }
			}
		})

		return new BadRequestException(modifiedError)
	},
})

export default VP
