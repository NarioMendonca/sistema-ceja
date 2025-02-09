import { makeClassesRepository, makeSubjectsRepository } from "@/repositories/factories";
import { FetchClassesBySubjectUseCase } from "@/usecases/classes/fetch-classes-by-subject";

export function makeFetchClassesBySubject() {
  const subjectsRepository = makeSubjectsRepository()
  const classesRepository = makeClassesRepository()
  const fetchClassesBySubject = new FetchClassesBySubjectUseCase(subjectsRepository, classesRepository)

  return fetchClassesBySubject
}