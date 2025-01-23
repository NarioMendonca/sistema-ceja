import { ClassesRepository } from '@/repositories'
import { Class } from '@/models'
import { ResourceNotFoundError } from '../errors'

interface GetClassRequest {
  classId: string
}

interface GetClassResponse {
  class: Class
}

export class GetClassUseCase {
  constructor(private classesRepository: ClassesRepository) { }

  async execute({
    classId,
  }: GetClassRequest): Promise<GetClassResponse> {
    const classData = await this.classesRepository.findById(classId)

    if (!classData) {
      throw new ResourceNotFoundError()
    }

    return {
      class: classData,
    }
  }
}
