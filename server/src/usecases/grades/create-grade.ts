import { Grade } from '@/models'
import { GradesRepository } from '@/repositories/gradesRepository'

interface CreateGradeUseCaseRequest {
  name: string
  gradeValue: number
  userId: string
  moduleId: string
}

interface CreateGradeUseCaseResponse {
  grade: Grade
}

export class CreateGradeUseCase {
  constructor(private gradesRepository: GradesRepository) { }

  async execute({
    gradeValue,
    moduleId,
    name,
    userId
  }: CreateGradeUseCaseRequest): Promise<CreateGradeUseCaseResponse> {
    const grade = await this.gradesRepository.create({
      grade: gradeValue,
      moduleId,
      userId,
      name
    })

    return {
      grade,
    }
  }
}
