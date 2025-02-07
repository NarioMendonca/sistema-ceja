import { PrismaSubjectTeacherReposity } from "@/repositories/prismaRepository/prisma-subject-teacher-repository";
import { FetchTeacherSubjectAssignment } from "@/usecases/TeacherSubjectAssignment/fetch-teacher-subject-assignments-by-subject";

export function makeFetchTeacherSubjectAssignmentBySubject() {
  const SubjectTeacherReposity = new PrismaSubjectTeacherReposity()
  const fetchSubjectTeacherBySubject = new FetchTeacherSubjectAssignment(SubjectTeacherReposity)
  return fetchSubjectTeacherBySubject
}