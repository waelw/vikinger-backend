import {
	BadRequestException,
	ValidationError,
	ValidationPipe,
} from "@nestjs/common"
function getErrorsObj(errors: ValidationError[]): ValidationError {
	if (errors[0].children.length) {
		return getErrorsObj(errors[0].children)
	} else {
		return errors[0]
	}
}
const VP = new ValidationPipe({
	whitelist: true,
	exceptionFactory: function (validationErrors: ValidationError[]) {
		return new BadRequestException({
			status: 400,
			errors: errorValidationResponseHelper(validationErrors),
		})
	},
})

export default VP

function errorValidationResponseHelper(error: ValidationError[]) {
	const formattedErrors = {}
	console.log(error)
	error.forEach(err => {
		if (err.children?.length) {
			err.children.forEach(childerr => {
				formatRecusive(childerr, formattedErrors, err.property)
			})
		} else {
			formattedErrors[err.property] = Object.values(err.constraints)
		}
	})
	return formattedErrors
}

function formatRecusive(
	err: ValidationError,
	targetObject: object,
	parentPrefix: string,
) {
	if (err.children?.length) {
		err.children.forEach(childerr => {
			formatRecusive(childerr, targetObject, parentPrefix + "." + err.property)
		})
	} else {
		targetObject[parentPrefix + "." + err.property] = Object.values(
			err.constraints,
		)
	}
}
