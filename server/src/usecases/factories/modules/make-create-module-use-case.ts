import { PrismaModulesRepository } from "@/repositories/prismaRepository/prisma-modules-repository";
import { CreateModuleUseCase } from "@/usecases/modules/create-module";

export function makeCreateModuleUseCase() {
  const modulesRepository = new PrismaModulesRepository()
  const createModuleUseCase = new CreateModuleUseCase(modulesRepository)
  return createModuleUseCase
}