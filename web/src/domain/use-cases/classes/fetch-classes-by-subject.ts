import { Class } from "@/domain/models/Class";

export interface FetchClassesBySubject {
  handle(params: FetchClassesBySubject.Params): Promise<FetchClassesBySubject.Model>
}

export namespace FetchClassesBySubject {
  export type Params = {
    subjectId: string
  }

  export type Model = {
    classes: Class[]
  }
}