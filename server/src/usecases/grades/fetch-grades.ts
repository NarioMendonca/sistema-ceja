import { GradesRepository } from '@/repositories/gradesRepository'
import { Grade } from '@/models'

interface FetchGradesUseCaseResponse {
  grades: Grade[]
}

export class FetchGradesUseCase {
  constructor(private gradesRepository: GradesRepository) { }

  async execute(): Promise<FetchGradesUseCaseResponse> {
    const grades = await this.gradesRepository.fetchAll()

    return {
      grades,
    }
  }
}
