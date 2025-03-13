import { SubjectsWithData } from '@/models'
import { SubjectsRepository } from '@/repositories/subjectsRepository'

interface FetchSubjectsByUserWithDataUseCaseRequest {
  userId: string
}

interface FetchSubjectsByUserWithDataUseCaseResponse {
  subjects: SubjectsWithData[]
}

export class FetchSubjectsByUserWithDataUseCase {
  constructor(private subjectsRepository: SubjectsRepository) { }

  async execute({ userId }: FetchSubjectsByUserWithDataUseCaseRequest): Promise<FetchSubjectsByUserWithDataUseCaseResponse> {
    const subjects = await this.subjectsRepository.fetchSubjectsByUserWithData(userId)

    return {
      subjects
    }
  }
}
