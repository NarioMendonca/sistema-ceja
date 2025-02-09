import { PrismaTeacherSubjectAssignmentReposity } from "@/repositories/prismaRepository/prisma-teacher-subject-assignment-repository";
import { FetchTeacherSubjectAssignment } from "@/usecases/TeacherSubjectAssignment/fetch-teacher-subject-assignments-by-subject";

export function makeFetchTeacherSubjectAssignmentBySubject() {
  const SubjectTeacherReposity = new PrismaTeacherSubjectAssignmentReposity()
  const fetchSubjectTeacherBySubject = new FetchTeacherSubjectAssignment(SubjectTeacherReposity)
  return fetchSubjectTeacherBySubject
}