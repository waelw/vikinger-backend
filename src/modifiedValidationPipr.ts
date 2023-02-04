import {
	BadRequestException,
	ValidationError,
	ValidationPipe,
} from "@nestjs/common"
function getErrorsObj(errors: ValidationError[]): ValidationError {
	if (errors[0].children.length) {
		console.log("test")
		return getErrorsObj(errors[0].children)
	} else {
		return errors[0]
	}
}
const VP = new ValidationPipe({
	whitelist: true,
	exceptionFactory: function (validationErrors: ValidationError[]) {
		let modifiedError = {
			status: 400,
			errors: {},
		}

		validationErrors.forEach(error => {
			if (!error.children.length)
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

					modifiedError = {
						...modifiedError,
						errors: { ...modifiedError.errors, ...errorObj },
					}
				}
			else {
				const e = getErrorsObj(error.children)
				for (const message of Object.values(e.constraints)) {
					let errorObj
					try {
						const parsed = JSON.parse(message)
						if (!parsed && typeof parsed !== "object") {
							throw new Error("still not an object")
						}

						errorObj = parsed
					} catch (er) {
						errorObj = {
							[e.property]: message,
						}
					}

					modifiedError = {
						...modifiedError,
						errors: { ...modifiedError.errors, ...errorObj },
					}
				}
			}
		})

		return new BadRequestException(modifiedError)
	},
})

export default VP
