import { PrismaClassesRepository } from "@/repositories/prismaRepository/prisma-classes-repository";
import { PrismaEnrollmentsRepository } from "@/repositories/prismaRepository/prisma-enrollments-repository";
import { PrismaUsersRepository } from "@/repositories/prismaRepository/prisma-users-repository";
import { RegisterStudentInClass } from "@/usecases/enrollments/register-student-in-class";

export function makeRegisterStudentInClass() {
  const usersRepository = new PrismaUsersRepository()
  const classesRepository = new PrismaClassesRepository()
  const enrollmentsRepository = new PrismaEnrollmentsRepository()
  const registerStudentInClass = new RegisterStudentInClass(usersRepository, classesRepository, enrollmentsRepository)

  return registerStudentInClass
}