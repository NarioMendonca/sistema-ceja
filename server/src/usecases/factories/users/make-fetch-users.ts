import { PrismaUsersRepository } from "@/repositories/prismaRepository/prisma-users-repository"
import { FetchUsersUseCase } from "@/usecases/users"

export function makeFetchUsers() {
  const usersRepository = new PrismaUsersRepository()
  const fetchUsers = new FetchUsersUseCase(usersRepository)
  return fetchUsers
}