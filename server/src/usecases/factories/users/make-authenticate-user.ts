import { PrismaUsersRepository } from "@/repositories/prismaRepository/prisma-users-repository";
import { AuthenticateUseCase } from "@/usecases/users";

export function makeAuthenticateUser() {
  const usersRepository = new PrismaUsersRepository()
  const authenticateUser = new AuthenticateUseCase(usersRepository)

  return authenticateUser
}