import { makeTeacherSubjectAssignmentRepository } from "@/repositories/factories"
import { GetSubjectsMetricsByUserId } from "@/usecases/TeacherSubjectAssignment/get-subjects-metrics-by-user-id";

export function makeFetchSubjectsMetricsByUserId() {
  const SubjectTeacherReposity = makeTeacherSubjectAssignmentRepository()
  const fetchSubjectsMetricsByUserId = new GetSubjectsMetricsByUserId(SubjectTeacherReposity)
  return fetchSubjectsMetricsByUserId
}