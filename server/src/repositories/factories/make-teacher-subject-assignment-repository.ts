import { PrismaTeacherSubjectAssignmentRepository } from "../prismaRepository/prisma-teacher-subject-assignment-repository";

export function makeTeacherSubjectAssignmentRepository() {
  return new PrismaTeacherSubjectAssignmentRepository()
}