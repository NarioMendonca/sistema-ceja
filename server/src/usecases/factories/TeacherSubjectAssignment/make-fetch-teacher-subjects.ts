import { PrismaTeacherSubjectAssignmentRepository } from "@/repositories/prismaRepository/prisma-teacher-subject-assignment-repository"
import { FetchTeacherSubjects } from "@/usecases/TeacherSubjectAssignment/fetch-teacher-subjects"

export function makeFetchTeacherSubjects() {
  const teacherSubjectAssingnmentsRepository = new PrismaTeacherSubjectAssignmentRepository()
  const fetchTeacherSubjects = new FetchTeacherSubjects(teacherSubjectAssingnmentsRepository)
  return fetchTeacherSubjects
}