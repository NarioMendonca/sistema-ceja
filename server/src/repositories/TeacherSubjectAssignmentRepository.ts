import { Subject } from "@/models";
import { SubjectTeacher } from "@/models/SubjectTeacher";

export type RegisterTeacherAtSubjectParams = {
  userId: string,
  subjectId: string
}

export type FindAssingmentParams = {
  userId: string,
  subjectId: string
}

export interface TeacherSubjectAssignmentRepository {
  registerTeacherAtSubject({ userId, subjectId }: RegisterTeacherAtSubjectParams): Promise<SubjectTeacher | null>
  findSubjectTeacher({ userId, subjectId }: FindAssingmentParams): Promise<SubjectTeacher | null>
  fetchBySubject(subjectId: string): Promise<SubjectTeacher[]>
  fetchSubjectsByTeacher(userId: string): Promise<Subject[]>
}