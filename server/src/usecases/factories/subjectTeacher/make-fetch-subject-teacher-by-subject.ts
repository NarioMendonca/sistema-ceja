import { PrismaSubjectTeacherReposity } from "@/repositories/prismaRepository/prisma-subject-teacher-repository";
import { FetchSubjectTeacherBySubject } from "@/usecases/subjectTeacher/fetch-subject-teacher-by-subject";

export function makeFetchSubjectTeacherBySubject() {
  const SubjectTeacherReposity = new PrismaSubjectTeacherReposity()
  const fetchSubjectTeacherBySubject = new FetchSubjectTeacherBySubject(SubjectTeacherReposity)
  return fetchSubjectTeacherBySubject
}