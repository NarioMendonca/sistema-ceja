import { ClassesRepository } from '@/repositories'
import { AlreadyExistsError } from '../errors'

interface CreateSubjectUseCaseRequest {
  name: string
}

export class CreateSubjectUseCase {
  constructor(private classesRepository: ClassesRepository) { }

  async execute({ name }: CreateSubjectUseCaseRequest): Promise<void> {
    const classAlreadyExists = await this.classesRepository.findByName(name)

    if (classAlreadyExists) {
      throw new AlreadyExistsError()
    }

    await this.classesRepository.create({ name })
  }
}
