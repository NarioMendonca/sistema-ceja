export interface CreateSubject {
  handle(props: CreateSubject.Params): Promise<CreateSubject.Model>
}

export namespace CreateSubject {
  export type Params = {
    title: string,
    description?: string
  }

  export type Model = void
}