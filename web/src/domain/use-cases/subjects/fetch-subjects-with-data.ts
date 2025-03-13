import { SubjectsWithData } from "@/domain/models/Subject"

export interface FetchSubjectsWithData {
  handle({ userId }: FetchSubjectsWithData.Params): Promise<FetchSubjectsWithData.Model>
}

export namespace FetchSubjectsWithData {
  export type Params = {
    userId: string
  }

  export type Model = {
    subjects: SubjectsWithData[]
  }
}