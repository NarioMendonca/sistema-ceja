import { SubjectTeacher } from "@/models/SubjectTeacher";

export type RegisterTeacherAtSubjectParams = {
  userId: string,
  subjectId: string
}

export type FindSubjectTeacherParams = {
  userId: string,
  subjectId: string
}

export interface SubjectTeacherReposity {
  registerTeacherAtSubject({ userId, subjectId }: RegisterTeacherAtSubjectParams): Promise<SubjectTeacher | null>
  findSubjectTeacher({ userId, subjectId }: FindSubjectTeacherParams): Promise<SubjectTeacher | null>
}