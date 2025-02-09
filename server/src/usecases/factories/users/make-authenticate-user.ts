import { makeUsersRepository } from "@/repositories/factories";
import { AuthenticateUseCase } from "@/usecases/users";

export function makeAuthenticateUser() {
  const usersRepository = makeUsersRepository()
  const authenticateUser = new AuthenticateUseCase(usersRepository)

  return authenticateUser
}