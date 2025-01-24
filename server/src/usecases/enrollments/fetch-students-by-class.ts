import { Student } from "@/models"
import { ClassesRepository } from "@/repositories"
import { EnrollmentsRepository } from "@/repositories/enrollmentsRepository"
import { ResourceNotFoundError } from "../errors"

type FetchClassStudentsRequest = {
  classId: string
}

type FetchStudentsClassResponse = {
  students: Student[]
}

export class FetchClassStudents {
  constructor(
    private classesRepository: ClassesRepository,
    private enrollmentsRepository: EnrollmentsRepository
  ) { }

  async execute({ classId }: FetchClassStudentsRequest): Promise<FetchStudentsClassResponse> {
    const classExists = await this.classesRepository.findById(classId)
    if (!classExists) {
      throw new ResourceNotFoundError()
    }

    const students = await this.enrollmentsRepository.fetchStudentsFromClass(classId)

    return {
      students
    }
  }
}