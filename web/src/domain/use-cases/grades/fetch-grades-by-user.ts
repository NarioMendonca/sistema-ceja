import { Grade } from "@/domain/models/Grade"

export interface FetchGradesByUser {
  handle(params: FetchGradesByUser.Params): Promise<FetchGradesByUser.Model>
}

export namespace FetchGradesByUser {
  export type Params = {
    userId: string
  }

  export type Model = {
    grades: Grade[]
  }
}