import { PrismaSubjectsRepository } from "@/repositories/prismaRepository/prisma-subjects-repository";
import { CreateSubjectUseCase } from "@/usecases/subjects/create-subject";

export function makeCreateSubject() {
  const subjectsRepository = new PrismaSubjectsRepository()
  const createSubject = new CreateSubjectUseCase(subjectsRepository)

  return createSubject
}