import {
	ValidationArguments,
	ValidationOptions,
	ValidatorConstraint,
	ValidatorConstraintInterface,
	registerDecorator,
} from "class-validator"

export function IsObjectNotArray(validationOptions?: ValidationOptions) {
	return function (object: object, propertyName: string) {
		registerDecorator({
			propertyName,
			target: object.constructor,
			options: validationOptions,
			validator: Validator,
		})
	}
}

@ValidatorConstraint({ name: "objectNotArray" })
export class Validator implements ValidatorConstraintInterface {
	validate(value: object, { object }): boolean {
		if (typeof value === "object" && !Array.isArray(value)) return true
		return false
	}
	defaultMessage(validationArguments?: ValidationArguments): string {
		return `${validationArguments.property} should be an object not ${
			Array.isArray(validationArguments.value)
				? "Array"
				: typeof validationArguments.value
		}`
	}
}
