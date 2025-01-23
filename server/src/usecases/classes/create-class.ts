import { ClassesRepository } from '@/repositories'
import { AlreadyExistsError } from '../errors'

interface CreateClassUseCaseRequest {
  name: string
}

export class CreateClassUseCase {
  constructor(private classesRepository: ClassesRepository) { }

  async execute({ name }: CreateClassUseCaseRequest): Promise<void> {
    const classAlreadyExists = await this.classesRepository.findByName(name)

    if (classAlreadyExists) {
      throw new AlreadyExistsError()
    }

    await this.classesRepository.create({ name })
  }
}
