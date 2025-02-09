import { PrismaUsersRepository } from "@/repositories/prismaRepository/prisma-users-repository";

export function makeUsersRepository() {
  return new PrismaUsersRepository()
}