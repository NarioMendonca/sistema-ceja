import { Module } from '@/models/Modules'
import { ModulesRepository } from '@/repositories/modulesRepository'

interface FetchModulesBySubjectUseCaseRequest {
  subjectId: string
}

interface FetchModulesBySubjectUseCaseResponse {
  modules: Module[]
}

export class FetchModulesBySubjectUseCase {
  constructor(private modulesRepository: ModulesRepository) { }

  async execute({ subjectId }: FetchModulesBySubjectUseCaseRequest): Promise<FetchModulesBySubjectUseCaseResponse> {
    const modules = await this.modulesRepository.fetchBySubjectId(subjectId)
    return {
      modules,
    }
  }
}
