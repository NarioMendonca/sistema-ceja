export class InvalidRoleError extends Error {
  constructor() {
    super('Invalid role.')
    this.name = 'InvalidRoleError'
  }
}