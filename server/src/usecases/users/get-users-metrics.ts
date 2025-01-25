import { UsersMetrics } from "@/models"
import { UsersRepository } from "@/repositories"

type GetUsersMetricsResponse = {
  usersMetrics: UsersMetrics
}

export class GetUsersMetrics {
  constructor(private usersRepository: UsersRepository) { }

  async execute(): Promise<GetUsersMetricsResponse> {
    const usersMetrics = await this.usersRepository.getUsersMetrics()

    return {
      usersMetrics
    }
  }
}