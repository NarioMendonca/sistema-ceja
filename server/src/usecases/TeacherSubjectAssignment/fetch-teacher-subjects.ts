import { Subject } from "@/models"
import { TeacherSubjectAssignmentRepository } from "@/repositories"

type FetchTeacherSubjectsRequest = {
  userId: string
}

type FetchTeacherSubjectsResponse = {
  subjects: Subject[]
}

export class FetchTeacherSubjects {
  constructor(private readonly teacherSubjectAssignmentRepository: TeacherSubjectAssignmentRepository) { }

  async execute({ userId }: FetchTeacherSubjectsRequest): Promise<FetchTeacherSubjectsResponse> {
    const subjects = await this.teacherSubjectAssignmentRepository.fetchSubjectsByTeacher(userId)

    return {
      subjects
    }
  }
}