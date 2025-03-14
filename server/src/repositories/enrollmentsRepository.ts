import { Student, Subject } from "@/models";
import { Enrollment } from "@/models/Enrollments";

export type registerStudentInSubjectParams = {
  subjectId: string
  userId: string
}

export type FindEnrollmentParams = {
  subjectId: string
  userId: string
}

export interface EnrollmentsRepository {
  findEnrollment(params: FindEnrollmentParams): Promise<Enrollment | null>
  registerStudentInSubject(params: registerStudentInSubjectParams): Promise<void>
  fetchStudentsBySubject(subjectId: string): Promise<Student[]>
  fetchStudentSubjects(userId: string): Promise<Subject[]>
}