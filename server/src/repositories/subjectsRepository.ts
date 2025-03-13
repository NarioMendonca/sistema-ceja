import { Subject, SubjectsWithData } from "@/models/Subject"

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
  fetchSubjectsByUserWithData(userId: string): Promise<SubjectsWithData[]>
  delete(courseId: string): Promise<void>
}
