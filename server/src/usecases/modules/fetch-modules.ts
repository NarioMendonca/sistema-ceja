import { Module } from '@/models/Modules'
import { ModulesRepository } from '@/repositories/modulesRepository'

interface FetchModulesUseCaseResponse {
  modules: Module[]
}

export class FetchModulesUseCase {
  constructor(private modulesRepository: ModulesRepository) { }

  async execute(): Promise<FetchModulesUseCaseResponse> {
    const modules = await this.modulesRepository.fetchAll()
    return {
      modules,
    }
  }
}
