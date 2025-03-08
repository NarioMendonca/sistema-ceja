import { PrismaGradesRepository } from "../prismaRepository/prisma-grades-repository";

export function makeGradesRepository() {
  return new PrismaGradesRepository()
}