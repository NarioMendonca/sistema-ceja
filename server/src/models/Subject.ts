import { Grade } from "./Grades"

export type Subject = {
  id: string
  name: string
  description: string | null
}

export type SubjectsWithData = Subject & {
  Modules: {
    id: string,
    name: string,
    description: string | null,
    subject_id: string,
    Grades: Grade[]
  }[]
}