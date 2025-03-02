import { ClassesRepository } from '@/repositories'
import { AlreadyExistsError } from '../../erros'
import { Class } from '@/models'

interface CreateClassUseCaseRequest {
  name: string
}

interface CreateClassUseCaseResponse {
  class: Class
}

export class CreateClassUseCase {
  constructor(private classesRepository: ClassesRepository) { }

  async execute({ name }: CreateClassUseCaseRequest): Promise<CreateClassUseCaseResponse> {
    const classAlreadyExists = await this.classesRepository.findByName(name)

    if (classAlreadyExists) {
      throw new AlreadyExistsError()
    }

    const classData = await this.classesRepository.create({ name })

    return {
      class: classData
    }
  }
}
