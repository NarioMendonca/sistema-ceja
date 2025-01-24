import { Student } from "@/domain/models/User";

export interface FetchStudentsByClass {
  handle(params: FetchStudentsByClass.Params): Promise<FetchStudentsByClass.Model>
}

export namespace FetchStudentsByClass {
  export type Params = {
    classId: string
  }

  export type Model = {
    students: Student[]
  }
}