import { makeGradesRepository } from "@/repositories/factories";
import { FetchGradesByUser } from "@/usecases/grades/fetch-grades-by-user";

export function makeFetchGradesByUser() {
  const gradesRepository = makeGradesRepository()
  return new FetchGradesByUser(gradesRepository)
}