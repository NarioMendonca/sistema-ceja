import { SubjectsRepository } from '@/repositories/subjectsRepository'
import { Subject } from '@/models/Subject'

interface FetchSubjectsUseCaseResponse {
  subjects: Subject[]
}

export class FetchSubjectsUseCase {
  constructor(private subjectsRepository: SubjectsRepository) { }

  async execute(): Promise<FetchSubjectsUseCaseResponse> {
    const subjects = await this.subjectsRepository.fetchAll()

    return {
      subjects
    }
  }
}
