import { PrismaClassesRepository } from "@/repositories/prismaRepository/prisma-classes-repository";
import { CreateClassUseCase } from "@/usecases/classes";

export function makeCreateClass() {
  const subjectsRepository = new PrismaClassesRepository()
  const createSubject = new CreateClassUseCase(subjectsRepository)

  return createSubject
}