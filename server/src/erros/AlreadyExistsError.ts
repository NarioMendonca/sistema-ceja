import { GenericError } from "./GenericError"

export class AlreadyExistsError extends GenericError {
  constructor(message: string = 'Already exists', statusCode: number = 409, details?: any) {
    super(message, statusCode, details)
  }
}
