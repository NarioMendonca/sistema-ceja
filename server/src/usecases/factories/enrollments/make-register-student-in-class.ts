import { makeEnrollmentsRepository, makeSubjectsRepository, makeUsersRepository } from "@/repositories/factories";
import { RegisterStudentInSubject } from "@/usecases/enrollments/register-student-in-subject";

export function makeRegisterStudentInClass() {
  const usersRepository = makeUsersRepository()
  const subjectsRepository = makeSubjectsRepository()
  const enrollmentsRepository = makeEnrollmentsRepository()
  const registerStudentInClass = new RegisterStudentInSubject(usersRepository, subjectsRepository, enrollmentsRepository)

  return registerStudentInClass
}