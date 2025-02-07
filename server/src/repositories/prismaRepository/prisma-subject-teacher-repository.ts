import { SubjectTeacher } from "@/models/SubjectTeacher";
import { FindSubjectTeacherParams, RegisterTeacherAtSubjectParams, SubjectTeacherReposity } from "../subjectTeacherRepository";
import { prisma } from "@/lib/prisma";

export class PrismaSubjectTeacherReposity implements SubjectTeacherReposity {
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

  async findSubjectTeacher({ userId, subjectId }: FindSubjectTeacherParams): Promise<SubjectTeacher | null> {
    const subjectTeacher = await prisma.teacherSubjectAssingnments.findFirst({
      where: {
        subject_id: subjectId,
        user_id: userId
      }
    })

    return subjectTeacher
  }
}