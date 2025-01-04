import { Grade } from '@/models'
import { GradesRepository } from '@/repositories/gradesRepository'

interface CreateGradeUseCaseRequest {
  title: string
  gradeValue: number
  studentId: string
  courseId: string
}

interface CreateGradeUseCaseResponse {
  grade: Grade
}

export class CreateGradeUseCase {
  constructor(private gradesRepository: GradesRepository) { }

  async execute({
    title,
    gradeValue,
    courseId,
    studentId
  }: CreateGradeUseCaseRequest): Promise<CreateGradeUseCaseResponse> {
    const grade = await this.gradesRepository.create({
      title,
      grade: gradeValue,
      courseId,
      studentId
    })

    return {
      grade,
    }
  }
}
