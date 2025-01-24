import { Class, Student } from "@/models"
import { EnrollmentsRepository } from "@/repositories/enrollmentsRepository"

type StudentsWithClasses = {
  student: Student,
  class: Class
}

type FetchStudentsWithClassesReponse = {
  studentsWithClasses: StudentsWithClasses[]
}

export class FetchStudentsWithClasses {
  constructor(private enrollmentsRepository: EnrollmentsRepository) { }

  async execute(): Promise<FetchStudentsWithClassesReponse> {
    const studentsWithClasses = await this.enrollmentsRepository.fetchStudentsWithClasses()

    return {
      studentsWithClasses
    }
  }
}