import { Class } from '@/models'
import { ClassesRepository } from '@/repositories/classesRepository'

interface FetchClassesUseCaseResponse {
  classes: Class[]
}

export class FetchClassesUseCase {
  constructor(private classesRepository: ClassesRepository) { }

  async execute(): Promise<FetchClassesUseCaseResponse> {
    const classes = await this.classesRepository.fetchAll()

    return {
      classes,
    }
  }
}
