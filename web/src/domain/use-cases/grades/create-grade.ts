import { Grade } from "@/domain/models/Grade"

export interface CreateGrade {
  handle(params: CreateGrade.Params): Promise<CreateGrade.Model>
}

export namespace CreateGrade {
  export type Params = {
    moduleId: string,
    userId: string,
    gradeValue: number,
    name: string
  }

  export type Model = {
    grade: Grade
  }
}