import { Class } from "@/domain/models/Class"

export interface CreateClass {
  handle(params: CreateClass.Params): Promise<CreateClass.Model>
}

export namespace CreateClass {
  export type Params = {
    name: string
    description?: string
  }

  export type Model = {
    class: Class
  }
}