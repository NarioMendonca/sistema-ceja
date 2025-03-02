import { GenericError } from "./GenericError"

export class UnauthorizedError extends GenericError {
  constructor(message: string = 'Sem autorização', statusCode: number = 401, details?: any) {
    super(message, statusCode, details)
  }
}