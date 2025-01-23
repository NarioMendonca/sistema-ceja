import { Subject } from "@/domain/models/Subject"

export interface FetchSubjects {
  handle(): Promise<FetchSubjects.Model>
}

export namespace FetchSubjects {
  export type Model = {
    subjects: Subject[]
  }
}