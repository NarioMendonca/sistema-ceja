import { PrismaUsersRepository } from "@/repositories/prismaRepository/prisma-users-repository";
import { RegisterUseCase } from "@/usecases/users";

export function makeRegisterUser() {
  const usersRepository = new PrismaUsersRepository()
  const registerUser = new RegisterUseCase(usersRepository)
  return registerUser
}