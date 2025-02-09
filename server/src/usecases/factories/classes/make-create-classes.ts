import { makeClassesRepository } from "@/repositories/factories";
import { CreateClassUseCase } from "@/usecases/classes";

export function makeCreateClass() {
  const classesRepository = makeClassesRepository()
  const createSubject = new CreateClassUseCase(classesRepository)

  return createSubject
}