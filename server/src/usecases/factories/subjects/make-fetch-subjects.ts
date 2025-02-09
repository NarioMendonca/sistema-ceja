import { makeSubjectsRepository } from "@/repositories/factories";
import { FetchSubjectsUseCase } from "@/usecases/subjects/fetch-subjects";

export function makeFetchSubjects() {
  const SubjectsRepository = makeSubjectsRepository()
  const fetchSubjects = new FetchSubjectsUseCase(SubjectsRepository)

  return fetchSubjects
}