export interface DeleteGrade {
  handle(params: DeleteGrade.Params): Promise<DeleteGrade.Model>
}

export namespace DeleteGrade {
  export type Params = {
    gradeId: string
  }

  export type Model = void
}