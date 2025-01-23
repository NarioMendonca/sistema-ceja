import { PrismaClassesRepository } from "@/repositories/prismaRepository/prisma-classes-repository";
import { GetClassUseCase } from "@/usecases/classes";

export function makeGetClasses() {
  const classesRepository = new PrismaClassesRepository()
  const getClass = new GetClassUseCase(classesRepository)

  return getClass
}