import { prisma } from "@/lib/prisma";
import { classCreateInput, ClassesRepository } from "../classesRepository";
import { Class } from "@/models";

export class PrismaClassesRepository implements ClassesRepository {
  async create(data: classCreateInput): Promise<Class> {
    const classData = await prisma.class.create({
      data,
    });

    return classData
  }

  async findByName(name: string): Promise<Class | null> {
    return prisma.class.findFirst({
      where: { name },
    });
  }

  async findById(id: string): Promise<Class | null> {
    return prisma.class.findUnique({
      where: { id },
    });
  }

  async fetchAll(): Promise<Class[]> {
    return prisma.class.findMany();
  }

  async fetchStudentsData(classId: string): Promise<any> {
    return prisma.class.findUnique({
      where: { id: classId },
      include: {
        Enrollments: {
          include: {
            user: {
              include: {
                Student: true
              }
            }
          }
        }
      }
    });
  }

  async fetchClassesBySubject(subjectId: string): Promise<Class[]> {
    const subjectClasses = await prisma.classSubjects.findMany({
      where: {
        subject_id: subjectId
      },
      include: {
        class: true
      }
    })

    const subjectClassesFormated = subjectClasses.map(subjectClass => ({
      ...subjectClass.class,
      id: subjectClass.class.id
    }))

    return subjectClassesFormated
  }

  async delete(classId: string): Promise<void> {
    await prisma.class.delete({
      where: { id: classId },
    });
  }
}