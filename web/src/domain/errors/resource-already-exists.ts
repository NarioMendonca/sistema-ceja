export class ResourceAlreadyExists extends Error {
  constructor() {
    super('Elemento já existe.')
    this.name = 'ResourceAlreadyExists'
  }
}