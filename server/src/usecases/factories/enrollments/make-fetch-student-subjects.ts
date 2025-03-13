import { makeEnrollmentsRepository } from "@/repositories/factories";
import { FetchStudentSubjects } from "@/usecases/enrollments/fetch-student-subjects";

export function makeFetchStudentSubjects() {
  const enrollmentsRepository = makeEnrollmentsRepository()
  return new FetchStudentSubjects(enrollmentsRepository)
}