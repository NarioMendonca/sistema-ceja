import { EnrollmentsRepository, FindEnrollmentParams, registerStudentInSubjectParams } from '@/repositories';
import { prisma } from '@/lib/prisma';
import { Enrollment } from '@/models/Enrollments';
import { Student } from '@/models';

export class PrismaEnrollmentsRepository implements EnrollmentsRepository {
  async findEnrollment({ subjectId, userId }: FindEnrollmentParams): Promise<Enrollment | null> {
    const enrollment = await prisma.enrollments.findFirst({
      where: {
        user_id: userId,
        subject_id: subjectId
      }
    })

    return enrollment
  }

  async registerStudentInSubject({ subjectId, userId }: registerStudentInSubjectParams): Promise<void> {
    await prisma.enrollments.create({
      data: {
        subject_id: subjectId,
        user_id: userId
      }
    })
  }

  async fetchStudentsBySubject(subjectId: string): Promise<Student[]> {

    const students = await prisma.user.findMany({
      where: {
        Enrollments: {
          some: {
            subject_id: {
              equals: subjectId
            }
          }
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
}
