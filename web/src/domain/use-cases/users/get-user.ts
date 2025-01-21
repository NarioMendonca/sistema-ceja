import { User } from "../../models/User"

export interface GetUser {
  handle(params: GetUser.Params): Promise<GetUser.Model>
}

export namespace GetUser {
  export type Params = {
    id: string
  }

  export type Model = User
}