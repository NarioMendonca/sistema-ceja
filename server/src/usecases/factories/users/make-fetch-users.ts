import { makeUsersRepository } from "@/repositories/factories"
import { FetchUsersUseCase } from "@/usecases/users"

export function makeFetchUsers() {
  const usersRepository = makeUsersRepository()
  const fetchUsers = new FetchUsersUseCase(usersRepository)
  return fetchUsers
}