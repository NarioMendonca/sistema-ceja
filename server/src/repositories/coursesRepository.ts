import { Course } from "@/models/Course"

export type CourseCreateInput = {
  id?: string
  title: string
  description?: string
}

export interface CoursesRepository {
  create(data: CourseCreateInput): Promise<void>
  findByTitle(title: string): Promise<Course | null>
  findById(id: string): Promise<Course | null>
  fetchAll(): Promise<Course[]>
  fetchStudentsData(courseId: string): Promise<any>
  delete(courseId: string): Promise<void>
}
