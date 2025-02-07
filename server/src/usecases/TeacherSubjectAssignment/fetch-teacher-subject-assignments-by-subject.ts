import { SubjectTeacher } from "@/models/SubjectTeacher"
import { SubjectTeacherReposity } from "@/repositories"

interface FetchTeacherSubjectAssignmentRequest {
  subjectId: string
}

interface FetchTeacherSubjectAssignmentResponse {
  subjectTeachers: SubjectTeacher[]
}

export class FetchTeacherSubjectAssignment {
  constructor(
    private readonly subjectTeacherRepository: SubjectTeacherReposity
  ) { }

  async execute({ subjectId }: FetchTeacherSubjectAssignmentRequest): Promise<FetchTeacherSubjectAssignmentResponse> {
    const subjectTeachers = await this.subjectTeacherRepository.fetchBySubject(subjectId)
    return {
      subjectTeachers
    }
  }
}