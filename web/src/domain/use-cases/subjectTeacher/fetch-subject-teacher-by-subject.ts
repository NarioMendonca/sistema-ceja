import { SubjectTeacher } from "@/domain/models/SubjectTeacher"

export interface FetchSubjectTeacherBySubject {
  handle(params: FetchSubjectTeacherBySubject.Params): Promise<FetchSubjectTeacherBySubject.Model>
}

export namespace FetchSubjectTeacherBySubject {
  export type Params = {
    subjectId: string
  }

  export type Model = {
    subjectTeachers: SubjectTeacher[]
  }
}