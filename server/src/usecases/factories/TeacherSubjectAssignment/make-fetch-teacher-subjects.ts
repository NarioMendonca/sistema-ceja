import { PrismaTeacherSubjectAssignmentReposity } from "@/repositories/prismaRepository/prisma-teacher-subject-assignment-repository"
import { FetchTeacherSubjects } from "@/usecases/TeacherSubjectAssignment/fetch-teacher-subjects"

export function makeFetchTeacherSubjects() {
  const teacherSubjectAssingnmentsRepository = new PrismaTeacherSubjectAssignmentReposity()
  const fetchTeacherSubjects = new FetchTeacherSubjects(teacherSubjectAssingnmentsRepository)
  return fetchTeacherSubjects
}