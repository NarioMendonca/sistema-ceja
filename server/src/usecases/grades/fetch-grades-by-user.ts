import { GradesRepository } from '@/repositories/gradesRepository'
import { Grade } from '@/models'

interface FetchGradesByUserRequest {
  userId: string
}

interface FetchGradesByUserResponse {
  grades: Grade[]
}

export class FetchGradesByUser {
  constructor(private gradesRepository: GradesRepository) { }

  async execute({ userId }: FetchGradesByUserRequest): Promise<FetchGradesByUserResponse> {
    const grades = await this.gradesRepository.fetchByUser(userId)

    return {
      grades,
    }
  }
}
