import { GradesRepository } from "@/repositories/gradesRepository";

interface DeleteGradeUseCaseRequest {
  gradeId: string
}

export class DeleteGradeUseCase {
  constructor(private gradesRepository: GradesRepository) { }

  async execute({ gradeId }: DeleteGradeUseCaseRequest) {
    await this.gradesRepository.deleteUnique(gradeId)
  }
}