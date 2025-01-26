import { UsersMetrics } from "@/domain/models/User"

export interface GetUsersMetrics {
  handle(): Promise<GetUsersMetrics.Model>
}

export namespace GetUsersMetrics {
  export type Model = {
    usersMetrics: UsersMetrics
  }
}