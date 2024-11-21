import { Course } from "@/models/Course"

type CourseCreateInput = {
  id?: string
  title: string
  description?: string
}

export interface CoursesRepository {
  create(data: CourseCreateInput): Promise<Course>
  findByTitle(title: string): Promise<Course | null>
  findById(id: string): Promise<Course | null>
  fetchAll(): Promise<Course[]>
  fetchStudentsData(courseId: string): Promise<any>
  delete(courseId: string): Promise<void>
}
