import { EnrollmentsRepository } from '@/repositories'
import { Student } from '@/models'

interface FetchStudentsBySubjectIdRequest {
  subjectId: string
}

interface FetchStudentsBySubjectIdResponse {
  students: Student[]
}

export class FetchStudentsBySubjectId {
  constructor(private enrollmentsRepository: EnrollmentsRepository) { }

  async execute({ subjectId }: FetchStudentsBySubjectIdRequest): Promise<FetchStudentsBySubjectIdResponse> {
    const students = await this.enrollmentsRepository.fetchStudentsBySubject(subjectId)

    return {
      students
    }
  }
}
