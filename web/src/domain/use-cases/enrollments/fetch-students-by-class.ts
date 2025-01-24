import { Student } from "@/domain/models/User";

export interface FetchStudentsByClass {
  handle(): Promise<FetchStudentsByClass.Model>
}

export namespace FetchStudentsByClass {
  export type Model = {
    students: Student[]
  }
}