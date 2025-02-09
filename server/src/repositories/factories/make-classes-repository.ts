import { PrismaClassesRepository } from "../prismaRepository/prisma-classes-repository";

export function makeClassesRepository() {
  return new PrismaClassesRepository()
}