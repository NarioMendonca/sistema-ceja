import { SubjectsRepository } from '@/repositories/subjectsRepository'
import { AlreadyExistsError } from '../../erros'

interface CreateSubjectUseCaseRequest {
  title: string
  description?: string
}

export class CreateSubjectUseCase {
  constructor(private subjectsRepository: SubjectsRepository) { }

  async execute({
    title,
    description,
  }: CreateSubjectUseCaseRequest): Promise<void> {
    const subjectAlreadyExists = await this.subjectsRepository.findByTitle(title)

    if (subjectAlreadyExists) {
      throw new AlreadyExistsError()
    }

    await this.subjectsRepository.create({ title, description })
  }
}
