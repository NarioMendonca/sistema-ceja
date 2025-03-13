import { Subject } from "@/domain/models/Subject"


export interface FetchStudentSubjects {
  handle(params: FetchStudentSubjects.Params): Promise<FetchStudentSubjects.Model>
}

export namespace FetchStudentSubjects {
  export type Params = {
    userId: string
  }

  export type Model = {
    subjects: Subject[]
  }
}