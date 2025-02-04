import { Student } from "@/models";
import { Enrollment } from "@/models/Enrollments";

export type registerStudentInClassParams = {
  classId: string
  userId: string
}

export type FindEnrollmentParams = {
  classId: string
  userId: string
}

export interface EnrollmentsRepository {
  findEnrollment(params: FindEnrollmentParams): Promise<Enrollment | null>
  fetchStudentsFromClass(classId: string): Promise<Student[]>
  fetchStudentsWithClasses(): Promise<any>
  registerStudentInClass(params: registerStudentInClassParams): Promise<void>
}