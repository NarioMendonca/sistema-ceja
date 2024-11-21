export class AlreadyExistsError extends Error {
  constructor() {
    super('Already Exists')
    this.name = 'AlreadyExistsError'
  }
}
