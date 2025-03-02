export class GenericError extends Error {
  statusCode: number
  details?: any
  constructor(message: string, statusCode: number, details?: any) {
    super(message)
    this.name = this.constructor.name
    this.statusCode = statusCode
    details = details

    Object.setPrototypeOf(this, new.target.prototype)
  }
}