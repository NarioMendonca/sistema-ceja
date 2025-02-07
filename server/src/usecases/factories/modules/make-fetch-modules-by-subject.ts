import { PrismaModulesRepository } from "@/repositories/prismaRepository/prisma-modules-repository"
import { FetchModulesUseCase } from "@/usecases/modules/fetch-modules"
import { FetchModulesBySubjectUseCase } from "@/usecases/modules/fetch-modules-by-subject"

export function makeFetchModulesBySubject() {
  const modulesRepository = new PrismaModulesRepository()
  const fetchModulesBySubjectUseCase = new FetchModulesBySubjectUseCase(modulesRepository)
  return fetchModulesBySubjectUseCase
}