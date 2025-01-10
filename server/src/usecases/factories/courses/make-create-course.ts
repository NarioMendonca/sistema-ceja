import { PrismaCoursesRepository } from "@/repositories/prismaRepository/prisma-courses-repository";
import { CreateCourseUseCase } from "@/usecases/courses/create-course";

export function makeCreateCourse() {
  const coursesRepository = new PrismaCoursesRepository()
  const createCourse = new CreateCourseUseCase(coursesRepository)

  return createCourse
}