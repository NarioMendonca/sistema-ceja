import { User, UserRoles } from "../../models/User"

export interface FetchUsers {
  handle(params: FetchUsers.Params): Promise<FetchUsers.Model>
}

export namespace FetchUsers {
  export type Params = {
    role?: UserRoles
  }

  export type Model = {
    users: User[]
  }
}