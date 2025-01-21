import { prisma } from "@/lib/prisma";
import { Class } from "@/models/Class";

export type ClassTeacher = {
  id: string
  teacher_id: string
  class_id: string
}

export class ClassesRepository {
  async createClasses(data: Class[]) {
    return prisma.class.createMany({ data })
  }

  async createClassTeacher(data: ClassTeacher[]) {
    return prisma.classTeacher.createMany({ data })
  }
}