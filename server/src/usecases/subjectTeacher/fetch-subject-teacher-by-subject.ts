import { SubjectTeacher } from "@/models/SubjectTeacher"
import { SubjectTeacherReposity } from "@/repositories"

interface FetchSubjectTeacherBySubjectRequest {
  subjectId: string
}

interface FetchSubjectTeacherBySubjectResponse {
  subjectTeachers: SubjectTeacher[]
}

export class FetchSubjectTeacherBySubject {
  constructor(
    private readonly subjectTeacherRepository: SubjectTeacherReposity
  ) { }

  async execute({ subjectId }: FetchSubjectTeacherBySubjectRequest): Promise<FetchSubjectTeacherBySubjectResponse> {
    const subjectTeachers = await this.subjectTeacherRepository.fetchBySubject(subjectId)
    return {
      subjectTeachers
    }
  }
}