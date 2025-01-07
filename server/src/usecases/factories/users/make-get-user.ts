import { PrismaUsersRepository } from "@/repositories/prismaRepository/prisma-users-repository"
import { GetUserUseCase } from "@/usecases/users/get-user"

export function makeGetUser() {
  const usersRepository = new PrismaUsersRepository()
  const getUser = new GetUserUseCase(usersRepository)
  return getUser
}