import { makeUsersRepository } from "@/repositories/factories";
import { RegisterUseCase } from "@/usecases/users";

export function makeRegisterUser() {
  const usersRepository = makeUsersRepository()
  const registerUser = new RegisterUseCase(usersRepository)
  return registerUser
}