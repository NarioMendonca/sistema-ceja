import { User } from "../models/User"

export interface FetchUsers {
  handle(): Promise<FetchUsers.Model>
}

export namespace FetchUsers {
  export type Model = {
    users: User[]
  }
}