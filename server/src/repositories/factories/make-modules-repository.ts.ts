import { PrismaModulesRepository } from "../prismaRepository/prisma-modules-repository";

export function makeModulesRepository() {
  return new PrismaModulesRepository()
}