import { makeSubjectsRepository } from "@/repositories/factories";
import { FetchSubjectsByUserWithDataUseCase } from "@/usecases/subjects/fetch-subjects-by-user-with-data";

export function makeFetchSubjectsWithData() {
  const subjectsRepository = makeSubjectsRepository()
  const fetchSubjectsWithData = new FetchSubjectsByUserWithDataUseCase(subjectsRepository)

  return fetchSubjectsWithData
}