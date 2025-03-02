import { GenericError } from "./GenericError"

export class InvalidCredentialsError extends GenericError {
  constructor(message: string = 'Credenciais inválidas', statusCode: number = 401, details?: any) {
    super(message, statusCode, details)
  }
}