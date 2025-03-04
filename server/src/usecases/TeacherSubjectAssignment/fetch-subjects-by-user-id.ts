import { Subject } from "@/models"
import { TeacherSubjectAssignmentRepository } from "@/repositories"

type FetchSubjectsByUserIdRequest = {
  userId: string
}

type FetchSubjectsByUserIdResponse = {
  subjects: Subject[]
}

export class FetchSubjectsByUserId {
  constructor(private readonly teacherSubjectAssigmentRepository: TeacherSubjectAssignmentRepository) { }

  async handle({ userId }: FetchSubjectsByUserIdRequest): Promise<FetchSubjectsByUserIdResponse> {
    const subjects = await this.teacherSubjectAssigmentRepository.fetchSubjectsByUserId(userId)

    return {
      subjects
    }
  }
}