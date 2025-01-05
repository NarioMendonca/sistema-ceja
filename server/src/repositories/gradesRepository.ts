import { Grade } from '@/models'

type createGradeInputData = {
  title: string
  grade: number
  studentId: string
  courseId: string
}

export interface GradesRepository {
  create(data: createGradeInputData): Promise<Grade>
  find(params: { studentId: string, courseId: string }): Promise<Grade | null>
  findByTitle(title: string): Promise<Grade | null>
  findByCourseId(courseId: string): Promise<Grade[]>
  deleteManyByCourseId(courseId: string): Promise<void>
  fetchAll(): Promise<Grade[]>
  fetchAllWithPeriod(): Promise<any>
  deleteUnique(id: string): Promise<void>
}
