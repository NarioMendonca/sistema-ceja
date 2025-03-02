import { GenericError } from "./GenericError"

export class InvalidPermissionError extends GenericError {
  constructor(message: string = 'Invalid Permission', statusCode: number = 403, details?: any) {
    super(message, statusCode, details)
  }
}