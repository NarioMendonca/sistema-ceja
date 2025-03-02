import { User } from "@/domain/models/User"

export interface GetUserSession {
  handle(): Promise<GetUserSession.Model>
}
export namespace GetUserSession {
  export type Model = {
    user: User
  }
}