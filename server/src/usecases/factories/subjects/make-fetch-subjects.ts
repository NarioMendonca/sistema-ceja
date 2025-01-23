import { PrismaSubjectsRepository } from "@/repositories/prismaRepository/prisma-subjects-repository";
import { FetchSubjectsUseCase } from "@/usecases/subjects/fetch-subjects";

export function makeFetchSubjects() {
  const SubjectsRepository = new PrismaSubjectsRepository()
  const fetchSubjects = new FetchSubjectsUseCase(SubjectsRepository)

  return fetchSubjects
}