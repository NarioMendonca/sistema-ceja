import { Class } from "@/models"

export type classCreateInput = {
  id?: string
  name: string
}

export interface ClassesRepository {
  create(data: classCreateInput): Promise<Class>
  findByName(name: string): Promise<Class | null>
  findById(id: string): Promise<Class | null>
  fetchAll(): Promise<Class[]>
  fetchStudentsData(classId: string): Promise<any>
  fetchClassesBySubject(subjectId: string): Promise<Class[]>
  delete(classId: string): Promise<void>
}
