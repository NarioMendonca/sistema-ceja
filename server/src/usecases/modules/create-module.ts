import { Module } from '@/models/Modules'
import { ModulesRepository } from '@/repositories/modulesRepository'

interface CreateModuleUseCaseRequest {
  name: string
  description?: string
  subjectId: string
}

interface CreateModuleUseCaseResponse {
  module: Module
}

export class CreateModuleUseCase {
  constructor(private modulesRepository: ModulesRepository) { }

  async execute({
    name,
    description,
    subjectId
  }: CreateModuleUseCaseRequest): Promise<CreateModuleUseCaseResponse> {
    const module = await this.modulesRepository.create({
      name,
      description,
      subjectId
    })

    return {
      module,
    }
  }
}
