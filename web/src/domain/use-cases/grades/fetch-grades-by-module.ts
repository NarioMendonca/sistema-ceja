import { Grade } from "@/domain/models/Grade"

export interface FetchGradesByModule {
  handle(params: FetchGradesByModule.Params): Promise<FetchGradesByModule.Model>
}

export namespace FetchGradesByModule {
  export type Params = {
    moduleId: string
  }

  export type Model = {
    grades: Grade[]
  }
}