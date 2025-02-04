import { EnrollmentsRepository, FindEnrollmentParams, registerStudentInClassParams } from '@/repositories';
import { Student } from '@/models';
import { prisma } from '@/lib/prisma';
import { Enrollment } from '@/models/Enrollments';

export class PrismaEnrollmentsRepository implements EnrollmentsRepository {
  async findEnrollment({ classId, userId }: FindEnrollmentParams): Promise<Enrollment | null> {
    const enrollment = await prisma.enrollments.findFirst({
      where: {
        user_id: userId,
        class_id: classId
      }
    })

    return enrollment
  }

  async fetchStudentsFromClass(classId: string): Promise<Student[]> {
    const usersIds = await prisma.enrollments.findMany({
      where: {
        class_id: classId
      },
      select: {
        user_id: true
      }
    })

    const usersIdsFormatted = usersIds.map(userId => userId.user_id)

    const students = await prisma.user.findMany({
      where: {
        id: {
          in: usersIdsFormatted
        }
      },
      include: {
        Student: true
      }
    })

    const studentsDataFormated = students.map(student => ({
      ...student,
      enrollmentCode: student.Student[0].enrollmentCode,
      dateOfBirth: student.Student[0].dateOfBirth,
      adress: student.Student[0].adress,
      Student: undefined
    }))

    return studentsDataFormated
  }

  async fetchStudentsWithClasses(): Promise<any> {
    const studentsWithClass = await prisma.user.findMany({
      where: {
        role: 'STUDENT'
      },
      include: {
        Enrollments: {
          include: {
            class: true
          }
        },
        Student: true
      }
    })

    const studentsWithClassFormated = studentsWithClass.map(data => ({
      ...data,
      class: data.Enrollments[0]?.class ?? null,
      enrollmentCode: data.Student[0].enrollmentCode,
      dateOfBirth: data.Student[0].dateOfBirth,
      adress: data.Student[0].adress,
      Student: undefined,
      Enrollments: undefined
    }))

    return studentsWithClassFormated
  }

  async registerStudentInClass({ classId, userId }: registerStudentInClassParams): Promise<void> {
    await prisma.enrollments.create({
      data: {
        class_id: classId,
        user_id: userId
      }
    })
  }
}
