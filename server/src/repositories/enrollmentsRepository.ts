import { Class, Student } from "@/models";

export interface EnrollmentsRepository {
  fetchStudentsFromClass(classId: string): Promise<Student[]>
  getClassFromStudent(studentId: string): Promise<Class | null>
  fetchStudentsWithClasses(): Promise<any>
}