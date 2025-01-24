import { PrismaEnrollmentsRepository } from "@/repositories/prismaRepository/prisma-enrollments-repository";
import { FetchStudentsWithClasses } from "@/usecases/enrollments/fetch-students-with-classes";

export function makeFetchStudentsWithClasses() {
  const enrollmentsRepository = new PrismaEnrollmentsRepository()
  const fetchStudentsWithClasses = new FetchStudentsWithClasses(enrollmentsRepository)

  return fetchStudentsWithClasses
}