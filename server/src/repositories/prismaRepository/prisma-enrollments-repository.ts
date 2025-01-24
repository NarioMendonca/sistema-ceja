import { EnrollmentsRepository } from '@/repositories';
import { Class, Student } from '@/models';
import { prisma } from '@/lib/prisma';

export class PrismaEnrollmentsRepository implements EnrollmentsRepository {
  async fetchStudentsFromClass(classId: string): Promise<Student[]> {
    const studentsIds = await prisma.enrollments.findMany({
      where: {
        class_id: classId
      },
      select: {
        student_id: true
      }
    })

    const studentsIdsFormated = studentsIds.map(studentId => studentId.student_id)

    const students = await prisma.student.findMany({
      where: {
        id: {
          in: studentsIdsFormated
        }
      },
      include: {
        user: true
      }
    })

    const studentsDataFormated = students.map(student => ({
      ...student,
      user: undefined,
      ...student.user,
      id: student.user_id,
      cpf: student.user.cpf ?? undefined,
      dateOfBirth: student.dateOfBirth ?? undefined,
      adress: student.adress ?? undefined
    }))

    return studentsDataFormated
  }

  async getClassFromStudent(studentId: string): Promise<Class | null> {
    const student = await prisma.enrollments.findUnique({
      where: { id: studentId },
      include: {
        class: true
      },
    });

    return student?.class ?? null
  }

  async fetchStudentsWithClasses(): Promise<any> {
    const enrollments = await prisma.enrollments.findMany()
    const students = await prisma.student.findMany({
      include: {
        user: true
      }
    })
    const studentsDataFormated = students.map(student => ({
      ...student,
      user: undefined,
      ...student.user,
      id: student.user_id,
      student_id: student.id,
      cpf: student.user.cpf ?? undefined,
      dateOfBirth: student.dateOfBirth ?? undefined,
      adress: student.adress ?? undefined
    }))

    const classes = await prisma.class.findMany()

    const studentsWithClasses = enrollments.map(enrollment => {
      const student = studentsDataFormated.find(student => student.student_id === enrollment.student_id)
      const classData = classes.find(classData => classData.id === enrollment.class_id)
      return {
        student: {
          ...student,
          student_id: undefined
        },
        class: classData
      }
    })

    return studentsWithClasses;
  }
}
