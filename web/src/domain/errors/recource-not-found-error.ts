import { GenericError } from "./GenericError";

export class ResourceNotFoundError extends GenericError {
  constructor(message: string = 'Recurso não encontrado', statusCode: number = 401, details?: any) {
    super(message, statusCode, details)
  }
}