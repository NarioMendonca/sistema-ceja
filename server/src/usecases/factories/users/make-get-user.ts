import { makeUsersRepository } from "@/repositories/factories"
import { PrismaUsersRepository } from "@/repositories/prismaRepository/prisma-users-repository"
import { GetUserUseCase } from "@/usecases/users/get-user"

export function makeGetUser() {
  const usersRepository = makeUsersRepository()
  const getUser = new GetUserUseCase(usersRepository)
  return getUser
}