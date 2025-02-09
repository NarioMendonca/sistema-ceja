import { makeSubjectsRepository } from "@/repositories/factories";
import { CreateSubjectUseCase } from "@/usecases/subjects/create-subject";

export function makeCreateSubject() {
  const subjectsRepository = makeSubjectsRepository()
  const createSubject = new CreateSubjectUseCase(subjectsRepository)

  return createSubject
}