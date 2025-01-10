import { Course } from "@/models";
import { CourseCreateInput, CoursesRepository } from "../coursesRepository";
import { prisma } from "@/lib/prisma";

export class PrismaCoursesRepository implements CoursesRepository {
  async create(data: CourseCreateInput): Promise<void> {
    prisma.subject.create({
      data: {
        name: data.title,
        description: data.description
      }
    })
  }

  async findByTitle(title: string): Promise<Course | null> {
    const course = await prisma.subject.findFirst({
      where: {
        name: title
      },
    });

    return course ? { ...course, description: '', title: course.name } : null;
  }

  async findById(id: string): Promise<Course | null> {
    const course = await prisma.subject.findUnique({
      where: {
        id,
      },
    });

    return course ? { ...course, title: course.name, description: course.description ?? '' } : null;
  }

  async fetchAll(): Promise<Course[]> {
    const courses = await prisma.subject.findMany();
    const coursesWithCorretlyData = courses.map(course => ({ id: course.id, title: course.name, description: course.description ?? '' }))

    return coursesWithCorretlyData;
  }

  fetchStudentsData(courseId: string): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async delete(courseId: string): Promise<void> {
    await prisma.subject.delete({
      where: {
        id: courseId,
      },
    });
  }

}