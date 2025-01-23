import { PrismaClassesRepository } from "@/repositories/prismaRepository/prisma-classes-repository";
import { FetchClassesUseCase } from "@/usecases/classes";

export function makeFetchClasses() {
  const classesRepository = new PrismaClassesRepository()
  const fetchClasses = new FetchClassesUseCase(classesRepository)

  return fetchClasses
}