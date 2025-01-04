import { CoursesRepository } from '@/repositories/coursesRepository'
import { Course } from '@/models/Course'

interface FetchCoursesUseCaseResponse {
  courses: Course[]
}

export class FetchCoursesUseCase {
  constructor(private coursesRepository: CoursesRepository) { }

  async execute(): Promise<FetchCoursesUseCaseResponse> {
    const courses = await this.coursesRepository.fetchAll()

    return {
      courses,
    }
  }
}
