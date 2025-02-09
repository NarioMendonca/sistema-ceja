import { Subject } from "@/models";
import { SubjectCreateInput, SubjectsRepository } from "../subjectsRepository";
import { prisma } from "@/lib/prisma";

export class PrismaSubjectsRepository implements SubjectsRepository {
  async create(data: SubjectCreateInput): Promise<void> {
    await prisma.subject.create({
      data: {
        name: data.title,
        description: data.description
      }
    })
  }

  async findByTitle(title: string): Promise<Subject | null> {
    const subject = await prisma.subject.findFirst({
      where: {
        name: title
      },
    });

    return subject
  }

  async findById(id: string): Promise<Subject | null> {
    const subject = await prisma.subject.findUnique({
      where: {
        id,
      },
    });

    return subject;
  }

  async fetchAll(): Promise<Subject[]> {
    const subjects = await prisma.subject.findMany();

    return subjects;
  }

  fetchStudentsData(subjectId: string): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async delete(subjectId: string): Promise<void> {
    await prisma.subject.delete({
      where: {
        id: subjectId,
      },
    });
  }

}