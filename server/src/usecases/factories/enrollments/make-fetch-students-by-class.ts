import { PrismaClassesRepository } from "@/repositories/prismaRepository/prisma-classes-repository";
import { PrismaEnrollmentsRepository } from "@/repositories/prismaRepository/prisma-enrollments-repository";
import { FetchClassStudents } from "@/usecases/enrollments/fetch-students-by-class";

export function makeFetchStudentsByClass() {
  const enrollmentsRepository = new PrismaEnrollmentsRepository()
  const classesRepository = new PrismaClassesRepository()
  const fetchStudentsByClass = new FetchClassStudents(classesRepository, enrollmentsRepository)

  return fetchStudentsByClass
}