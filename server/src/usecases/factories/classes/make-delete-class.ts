import { makeClassesRepository, makeUsersRepository } from "@/repositories/factories";
import { DeleteClassUseCase } from "@/usecases/classes";

export function makeDeleteClass() {
  const usersRepository = makeUsersRepository()
  const classesRepository = makeClassesRepository()
  const deleteClass = new DeleteClassUseCase(classesRepository, usersRepository)

  return deleteClass
}