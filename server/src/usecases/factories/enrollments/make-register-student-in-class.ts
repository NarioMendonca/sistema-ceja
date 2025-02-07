import { PrismaEnrollmentsRepository } from "@/repositories/prismaRepository/prisma-enrollments-repository";
import { PrismaSubjectsRepository } from "@/repositories/prismaRepository/prisma-subjects-repository";
import { PrismaUsersRepository } from "@/repositories/prismaRepository/prisma-users-repository";
import { RegisterStudentInSubject } from "@/usecases/enrollments/register-student-in-subject";

export function makeRegisterStudentInClass() {
  const usersRepository = new PrismaUsersRepository()
  const subjectsRepository = new PrismaSubjectsRepository()
  const enrollmentsRepository = new PrismaEnrollmentsRepository()
  const registerStudentInClass = new RegisterStudentInSubject(usersRepository, subjectsRepository, enrollmentsRepository)

  return registerStudentInClass
}