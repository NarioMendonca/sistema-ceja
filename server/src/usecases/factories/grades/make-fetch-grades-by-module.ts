import { makeGradesRepository } from "@/repositories/factories";
import { FetchGradesByModuleUseCase } from "@/usecases/grades/fetch-grades-by-module";

export function makeFetchGradesByModule() {
  const gradesRepository = makeGradesRepository()
  return new FetchGradesByModuleUseCase(gradesRepository)
}