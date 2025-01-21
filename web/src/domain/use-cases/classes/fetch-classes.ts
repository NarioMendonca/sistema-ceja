import { Class } from "@/domain/models/Class";

export interface FetchClasses {
  handle(): Promise<FetchClasses.Model>
}

export namespace FetchClasses {
  export type Model = {
    classes: Class[]
  }
}