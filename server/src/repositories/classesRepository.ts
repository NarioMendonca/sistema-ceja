import { Class } from "@/models"

export type classCreateInput = {
  id?: string
  name: string
}

export interface ClassesRepository {
  create(data: classCreateInput): Promise<void>
  findByName(name: string): Promise<Class | null>
  findById(id: string): Promise<Class | null>
  fetchAll(): Promise<Class[]>
  fetchStudentsData(classId: string): Promise<any>
  delete(classId: string): Promise<void>
}
