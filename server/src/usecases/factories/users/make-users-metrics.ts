import { PrismaUsersRepository } from "@/repositories/prismaRepository/prisma-users-repository";
import { GetUsersMetrics } from "@/usecases/users/get-users-metrics";

export function makeGetUsersMetrics() {
  const usersRepository = new PrismaUsersRepository()
  const usersMetrics = new GetUsersMetrics(usersRepository)
  return usersMetrics
}