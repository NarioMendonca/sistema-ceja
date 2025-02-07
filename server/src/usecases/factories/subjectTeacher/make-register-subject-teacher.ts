import { PrismaSubjectTeacherReposity } from "@/repositories/prismaRepository/prisma-subject-teacher-repository";
import { PrismaSubjectsRepository } from "@/repositories/prismaRepository/prisma-subjects-repository";
import { PrismaUsersRepository } from "@/repositories/prismaRepository/prisma-users-repository";
import { RegisterTeacherSubjectAssignment } from "@/usecases/TeacherSubjectAssignment/register-teacher-subject-assingnment";

export function makeRegisterTeacherSubjectAssignment() {
  const subjectTeacherRepository = new PrismaSubjectTeacherReposity()
  const subjectsRepository = new PrismaSubjectsRepository()
  const usersRepository = new PrismaUsersRepository()
  const registerSubjectTeacher = new RegisterTeacherSubjectAssignment(usersRepository, subjectsRepository, subjectTeacherRepository)
  return registerSubjectTeacher
}