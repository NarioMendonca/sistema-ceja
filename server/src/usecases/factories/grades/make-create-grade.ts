import { makeGradesRepository } from "@/repositories/factories";
import { CreateGradeUseCase } from "@/usecases/grades/create-grade";

export function makeCreateGrade() {
  const gradesRepository = makeGradesRepository()
  return new CreateGradeUseCase(gradesRepository)
}