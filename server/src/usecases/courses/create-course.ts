import { Course } from '@/models/Course'
import { CoursesRepository } from '@/repositories/coursesRepository'
import { AlreadyExistsError } from '../errors'

interface CreateCourseUseCaseRequest {
  title: string
  description?: string
}

export class CreateCourseUseCase {
  constructor(private coursesRepository: CoursesRepository) { }

  async execute({
    title,
    description,
  }: CreateCourseUseCaseRequest): Promise<void> {
    const courseAlreadyExists = await this.coursesRepository.findByTitle(title)

    if (courseAlreadyExists) {
      throw new AlreadyExistsError()
    }

    await this.coursesRepository.create({ title, description })
  }
}
