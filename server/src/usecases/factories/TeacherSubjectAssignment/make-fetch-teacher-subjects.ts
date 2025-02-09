import { makeTeacherSubjectAssignmentRepository } from "@/repositories/factories"
import { FetchTeacherSubjects } from "@/usecases/TeacherSubjectAssignment/fetch-teacher-subjects"

export function makeFetchTeacherSubjects() {
  const teacherSubjectAssingnmentsRepository = makeTeacherSubjectAssignmentRepository()
  const fetchTeacherSubjects = new FetchTeacherSubjects(teacherSubjectAssingnmentsRepository)
  return fetchTeacherSubjects
}