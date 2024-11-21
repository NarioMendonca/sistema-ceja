import { Course } from '@/models/Course'
import { CoursesRepository } from '@/repositories/coursesRepository'
import { AlreadyExistsError } from '../errors'

interface CreateCourseUseCaseRequest {
  title: string
  description?: string
}

interface CreateCourseUseCaseResponse {
  course: Course
}

export class CreateCourseUseCase {
  constructor(private coursesRepository: CoursesRepository) { }

  async execute({
    title,
    description,
  }: CreateCourseUseCaseRequest): Promise<CreateCourseUseCaseResponse> {
    const courseAlreadyExists = await this.coursesRepository.findByTitle(title)

    if (courseAlreadyExists) {
      throw new AlreadyExistsError()
    }

    const course = await this.coursesRepository.create({ title, description })

    return {
      course,
    }
  }
}
