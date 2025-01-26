import { PrismaClassesRepository } from "@/repositories/prismaRepository/prisma-classes-repository";
import { PrismaSubjectsRepository } from "@/repositories/prismaRepository/prisma-subjects-repository";
import { FetchClassesBySubjectUseCase } from "@/usecases/classes/fetch-classes-by-subject";

export function makeFetchClassesBySubject() {
  const subjectsRepository = new PrismaSubjectsRepository()
  const classesRepository = new PrismaClassesRepository()
  const fetchClassesBySubject = new FetchClassesBySubjectUseCase(subjectsRepository, classesRepository)

  return fetchClassesBySubject
}