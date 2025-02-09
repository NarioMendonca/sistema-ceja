import { makeTeacherSubjectAssignmentRepository } from "@/repositories/factories"
import { FetchTeacherSubjectAssignment } from "@/usecases/TeacherSubjectAssignment/fetch-teacher-subject-assignments-by-subject";

export function makeFetchTeacherSubjectAssignmentBySubject() {
  const SubjectTeacherReposity = makeTeacherSubjectAssignmentRepository()
  const fetchSubjectTeacherBySubject = new FetchTeacherSubjectAssignment(SubjectTeacherReposity)
  return fetchSubjectTeacherBySubject
}