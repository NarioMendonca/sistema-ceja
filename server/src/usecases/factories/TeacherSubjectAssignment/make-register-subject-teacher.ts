import { PrismaTeacherSubjectAssignmentRepository } from "@/repositories/prismaRepository/prisma-teacher-subject-assignment-repository";
import { PrismaSubjectsRepository } from "@/repositories/prismaRepository/prisma-subjects-repository";
import { PrismaUsersRepository } from "@/repositories/prismaRepository/prisma-users-repository";
import { RegisterTeacherSubjectAssignment } from "@/usecases/TeacherSubjectAssignment/register-teacher-subject-assingnment";

export function makeRegisterTeacherSubjectAssignment() {
  const subjectTeacherRepository = new PrismaTeacherSubjectAssignmentRepository()
  const subjectsRepository = new PrismaSubjectsRepository()
  const usersRepository = new PrismaUsersRepository()
  const registerSubjectTeacher = new RegisterTeacherSubjectAssignment(usersRepository, subjectsRepository, subjectTeacherRepository)
  return registerSubjectTeacher
}