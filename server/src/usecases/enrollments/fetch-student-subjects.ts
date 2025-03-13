import { EnrollmentsRepository } from '@/repositories'
import { Student } from '@/models'
import { Subject } from '@prisma/client'

interface FetchStudentSubjectsRequest {
  userId: string
}

interface FetchStudentSubjectsResponse {
  subjects: Subject[]
}

export class FetchStudentSubjects {
  constructor(private enrollmentsRepository: EnrollmentsRepository) { }

  async execute({ userId }: FetchStudentSubjectsRequest): Promise<FetchStudentSubjectsResponse> {
    const subjects = await this.enrollmentsRepository.fetchStudentSubjects(userId)

    return {
      subjects
    }
  }
}
