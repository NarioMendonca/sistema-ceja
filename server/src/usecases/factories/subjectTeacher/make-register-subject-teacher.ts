import { PrismaSubjectTeacherReposity } from "@/repositories/prismaRepository/prisma-subject-teacher-repository";
import { PrismaSubjectsRepository } from "@/repositories/prismaRepository/prisma-subjects-repository";
import { PrismaUsersRepository } from "@/repositories/prismaRepository/prisma-users-repository";
import { RegisterSubjectTeacher } from "@/usecases/subjectTeacher/register-subject-teacher";

export function makeRegisterSubjectTeacher() {
  const subjectTeacherRepository = new PrismaSubjectTeacherReposity()
  const subjectsRepository = new PrismaSubjectsRepository()
  const usersRepository = new PrismaUsersRepository()
  const registerSubjectTeacher = new RegisterSubjectTeacher(usersRepository, subjectsRepository, subjectTeacherRepository)
  return registerSubjectTeacher
}