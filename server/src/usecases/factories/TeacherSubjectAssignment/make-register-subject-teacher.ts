import { makeSubjectsRepository, makeTeacherSubjectAssignmentRepository, makeUsersRepository } from "@/repositories/factories";
import { RegisterTeacherSubjectAssignment } from "@/usecases/TeacherSubjectAssignment/register-teacher-subject-assingnment";

export function makeRegisterTeacherSubjectAssignment() {
  const subjectTeacherRepository = makeTeacherSubjectAssignmentRepository()
  const subjectsRepository = makeSubjectsRepository()
  const usersRepository = makeUsersRepository()
  const registerSubjectTeacher = new RegisterTeacherSubjectAssignment(usersRepository, subjectsRepository, subjectTeacherRepository)
  return registerSubjectTeacher
}