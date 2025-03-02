import { GenericError } from "./GenericError"

export class UnexpectedError extends GenericError {
  constructor(message: string = 'Algo de inesperado aconteceu', statusCode: number = 401, details?: any) {
    super(message, statusCode, details)
  }
}