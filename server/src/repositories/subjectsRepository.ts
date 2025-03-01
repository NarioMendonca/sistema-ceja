import { Subject } from "@/models/Subject"

export type SubjectCreateInput = {
  id?: string
  title: string
  description?: string
}

export interface SubjectsRepository {
  create(data: SubjectCreateInput): Promise<void>
  findByTitle(title: string): Promise<Subject | null>
  findById(id: string): Promise<Subject | null>
  fetchAll(): Promise<Subject[]>
  delete(courseId: string): Promise<void>
}
