import { SubjectTeacher } from "@/models/SubjectTeacher"
import { TeacherSubjectAssignmentRepository } from "@/repositories"

interface FetchTeacherSubjectAssignmentRequest {
  subjectId: string
}

interface FetchTeacherSubjectAssignmentResponse {
  subjectTeachers: SubjectTeacher[]
}

export class FetchTeacherSubjectAssignment {
  constructor(
    private readonly subjectTeacherRepository: TeacherSubjectAssignmentRepository
  ) { }

  async execute({ subjectId }: FetchTeacherSubjectAssignmentRequest): Promise<FetchTeacherSubjectAssignmentResponse> {
    const subjectTeachers = await this.subjectTeacherRepository.fetchBySubject(subjectId)
    return {
      subjectTeachers
    }
  }
}