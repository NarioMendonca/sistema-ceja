import { makeGradesRepository } from "@/repositories/factories";
import { DeleteGradeUseCase } from "@/usecases/grades/delete-grade";

export function makeDeleteGrade() {
  const gradesRepository = makeGradesRepository()
  return new DeleteGradeUseCase(gradesRepository)
}