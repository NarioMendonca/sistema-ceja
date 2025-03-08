import { Grade } from '@/models'

export type createGradeInputData = {
  name: string
  grade: number
  userId: string
  moduleId: string
}

export interface GradesRepository {
  create(data: createGradeInputData): Promise<Grade>
  fetchAll(): Promise<Grade[]>
  fetchByModule(moduleId: string): Promise<Grade[]>
  fetchByUser(userId: string): Promise<Grade[]>
  delete(id: string): Promise<void>
}
