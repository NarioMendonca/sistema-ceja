import { GenericError } from "./GenericError"

export class InvalidCredentialsError extends GenericError {
	constructor(message: string = 'Invalid credentials', statusCode: number = 401, details?: any) {
		super(message, statusCode, details)
	}
}
