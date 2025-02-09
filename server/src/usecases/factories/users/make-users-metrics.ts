import { makeUsersRepository } from "@/repositories/factories";
import { GetUsersMetrics } from "@/usecases/users/get-users-metrics";

export function makeGetUsersMetrics() {
  const usersRepository = makeUsersRepository()
  const usersMetrics = new GetUsersMetrics(usersRepository)
  return usersMetrics
}