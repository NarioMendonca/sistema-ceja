import { GenericError } from "./GenericError"

export class ResourceNotFoundError extends GenericError {
  constructor(message: string = 'Not found', statusCode: number = 404, details?: any) {
    super(message, statusCode, details)
  }
}