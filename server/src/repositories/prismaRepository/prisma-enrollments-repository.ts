import { EnrollmentsRepository, FindEnrollmentParams, registerStudentInSubjectParams } from '@/repositories';
import { prisma } from '@/lib/prisma';
import { Enrollment } from '@/models/Enrollments';

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
}
