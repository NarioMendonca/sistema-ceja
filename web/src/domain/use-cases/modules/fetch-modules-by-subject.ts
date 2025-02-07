import { Module } from "@/domain/models/Module"

export interface FetchModulesBySubject {
  handle(params: FetchModulesBySubject.Params): Promise<FetchModulesBySubject.Model>
}

export namespace FetchModulesBySubject {
  export type Params = {
    subjectId: string
  }

  export type Model = {
    modules: Module[]
  }
}