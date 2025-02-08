import { Module } from "@/domain/models/Module"

export interface CreateModule {
  handle(params: CreateModule.Params): Promise<CreateModule.Model>
}

export namespace CreateModule {
  export type Params = {
    name: string,
    description?: string,
    subjectId: string
  }

  export type Model = {
    module: Module
  }
}