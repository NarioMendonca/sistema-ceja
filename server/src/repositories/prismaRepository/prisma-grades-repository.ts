import { Grade } from "@/models";
import { GradesRepository, createGradeInputData } from "../gradesRepository";
import { prisma } from "@/lib/prisma";

export class PrismaGradesRepository implements GradesRepository {
  async create(data: createGradeInputData): Promise<Grade> {
    const grade = await prisma.grades.create({
      data: {
        name: data.name,
        grade: data.grade,
        module_id: data.moduleId,
        user_id: data.userId
      }
    })

    return grade
  }

  async fetchAll(): Promise<Grade[]> {
    const grades = await prisma.grades.findMany()

    return grades
  }

  async delete(id: string): Promise<void> {
    await prisma.grades.delete({
      where: { id }
    })
  }

  async fetchByUser(userId: string): Promise<Grade[]> {
    const grades = await prisma.grades.findMany({
      where: {
        user_id: userId
      }
    })

    return grades
  }

  async fetchByModule(moduleId: string): Promise<Grade[]> {
    const grades = await prisma.grades.findMany({
      where: {
        module_id: moduleId
      }
    })

    return grades
  }
}