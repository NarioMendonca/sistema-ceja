import { makeTeacherSubjectAssignmentRepository } from "@/repositories/factories"
import { FetchSubjectsByUserId } from "@/usecases/TeacherSubjectAssignment/fetch-subjects-by-user-id";

export function makeFetchSubjectsByUserId() {
  const SubjectTeacherReposity = makeTeacherSubjectAssignmentRepository()
  const fetchSubjectsByUserId = new FetchSubjectsByUserId(SubjectTeacherReposity)
  return fetchSubjectsByUserId
}