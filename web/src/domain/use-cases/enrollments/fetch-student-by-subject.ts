import { Student } from "@/domain/models/User"

export interface FetchStudentBySubject {
  handle(params: FetchStudentBySubject.Params): Promise<FetchStudentBySubject.Model>
}

export namespace FetchStudentBySubject {
  export type Params = {
    subjectId: string
  }

  export type Model = {
    students: Student[]
  }
}