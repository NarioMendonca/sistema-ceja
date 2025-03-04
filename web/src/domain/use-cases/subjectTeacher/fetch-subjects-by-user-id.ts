import { Subject } from "@/domain/models/Subject"

export interface FetchSubjectsByUserId {
  handle(params: FetchSubjectsByUserId.Params): Promise<FetchSubjectsByUserId.Model>
}

export namespace FetchSubjectsByUserId {
  export type Params = {
    userId: string
  }

  export type Model = {
    subjects: Subject[]
  }
}