import { PrismaModulesRepository } from "@/repositories/prismaRepository/prisma-modules-repository"
import { FetchModulesUseCase } from "@/usecases/modules/fetch-modules"

export function makeFetchModulesUseCase() {
  const modulesRepository = new PrismaModulesRepository()
  const fetchModulesUseCase = new FetchModulesUseCase(modulesRepository)
  return fetchModulesUseCase
}