import { SubjectTeacher } from "@/models/SubjectTeacher";
import { FindAssingmentParams, RegisterTeacherAtSubjectParams, TeacherSubjectAssignmentRepository } from "../TeacherSubjectAssignmentRepository";
import { prisma } from "@/lib/prisma";
import { Subject } from "@/models";

export class PrismaTeacherSubjectAssignmentRepository implements TeacherSubjectAssignmentRepository {
  async registerTeacherAtSubject({ userId, subjectId }: RegisterTeacherAtSubjectParams): Promise<SubjectTeacher> {
    const subjectTeacher = await prisma.teacherSubjectAssingnments.create({
      data: {
        subject_id: subjectId,
        user_id: userId
      }
    })

    return subjectTeacher
  }

  async fetchBySubject(subjectId: string): Promise<SubjectTeacher[]> {
    const subjectTeachers = await prisma.teacherSubjectAssingnments.findMany({
      where: {
        subject_id: subjectId
      }
    })

    return subjectTeachers
  }

  async findSubjectTeacher({ userId, subjectId }: FindAssingmentParams): Promise<SubjectTeacher | null> {
    const subjectTeacher = await prisma.teacherSubjectAssingnments.findFirst({
      where: {
        subject_id: subjectId,
        user_id: userId
      }
    })

    return subjectTeacher
  }

  async fetchSubjectsByUserId(userId: string): Promise<Subject[]> {
    const subjects = await prisma.subject.findMany({
      where: {
        TeacherSubjectAssingnment: {
          some: {
            user_id: {
              equals: userId
            }
          }
        }
      }
    })

    return subjects
  }

  async GetSubjectsMetricsByUserId(userId: string): Promise<number> {
    const subjectsMetrics = await prisma.teacherSubjectAssingnments.count({
      where: {
        user_id: userId
      }
    })

    return subjectsMetrics
  }
}