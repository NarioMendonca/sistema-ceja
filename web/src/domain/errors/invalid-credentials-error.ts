export class InvalidCredentialsError extends Error {
  constructor() {
    super('Credenciais inválias')
    this.name = 'InvalidCredentialsError'
  }
}