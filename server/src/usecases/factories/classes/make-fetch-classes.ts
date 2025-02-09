import { makeClassesRepository } from "@/repositories/factories";
import { FetchClassesUseCase } from "@/usecases/classes";

export function makeFetchClasses() {
  const classesRepository = makeClassesRepository()
  const fetchClasses = new FetchClassesUseCase(classesRepository)

  return fetchClasses
}