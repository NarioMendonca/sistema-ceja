import { PrismaClassesRepository } from "@/repositories/prismaRepository/prisma-classes-repository";
import { PrismaUsersRepository } from "@/repositories/prismaRepository/prisma-users-repository";
import { DeleteClassUseCase } from "@/usecases/classes";

export function makeDeleteClass() {
  const usersRepository = new PrismaUsersRepository()
  const classesRepository = new PrismaClassesRepository()
  const deleteClass = new DeleteClassUseCase(classesRepository, usersRepository)

  return deleteClass
}