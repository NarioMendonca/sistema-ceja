export interface RegisterSubjectTeacher {
  handle(params: RegisterSubjectTeacher.Params): Promise<RegisterSubjectTeacher.Model>
}

export namespace RegisterSubjectTeacher {
  export type Params = {
    userId: string,
    subjectId: string
  }

  export type Model = void
}