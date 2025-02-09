import { makeClassesRepository } from "@/repositories/factories";
import { GetClassUseCase } from "@/usecases/classes";

export function makeGetClasses() {
  const classesRepository = makeClassesRepository()
  const getClass = new GetClassUseCase(classesRepository)

  return getClass
}