import { makeEnrollmentsRepository } from "@/repositories/factories";
import { FetchStudentsBySubjectId } from "@/usecases/enrollments/fetch-students-by-subject";

export function makeFetchStudentsBySubjectId() {
  const enrollmentsRepository = makeEnrollmentsRepository()
  return new FetchStudentsBySubjectId(enrollmentsRepository)
}