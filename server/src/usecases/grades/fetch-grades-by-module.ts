import { GradesRepository } from '@/repositories/gradesRepository'
import { Grade } from '@/models'

interface FetchGradesByModuleUseCaseRequest {
  moduleId: string
}

interface FetchGradesByModuleUseCaseResponse {
  grades: Grade[]
}

export class FetchGradesByModuleUseCase {
  constructor(private gradesRepository: GradesRepository) { }

  async execute({ moduleId }: FetchGradesByModuleUseCaseRequest): Promise<FetchGradesByModuleUseCaseResponse> {
    const grades = await this.gradesRepository.fetchByModule(moduleId)

    return {
      grades,
    }
  }
}
