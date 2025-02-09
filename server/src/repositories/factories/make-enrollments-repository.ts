import { PrismaEnrollmentsRepository } from "../prismaRepository/prisma-enrollments-repository";

export function makeEnrollmentsRepository() {
  return new PrismaEnrollmentsRepository()
}