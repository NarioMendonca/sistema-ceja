import { PrismaCoursesRepository } from "@/repositories/prismaRepository/prisma-courses-repository";
import { FetchCoursesUseCase } from "@/usecases/courses/fetch-courses";

export function makeFetchCourses() {
  const coursesRepository = new PrismaCoursesRepository()
  const fetchCourses = new FetchCoursesUseCase(coursesRepository)

  return fetchCourses
}