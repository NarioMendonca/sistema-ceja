import { PrismaSubjectsRepository } from "../prismaRepository/prisma-subjects-repository";

export function makeSubjectsRepository() {
  return new PrismaSubjectsRepository()
}