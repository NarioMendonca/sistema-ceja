import { makeModulesRepository } from "@/repositories/factories"
import { FetchModulesUseCase } from "@/usecases/modules/fetch-modules"

export function makeFetchModulesUseCase() {
  const modulesRepository = makeModulesRepository()
  const fetchModulesUseCase = new FetchModulesUseCase(modulesRepository)
  return fetchModulesUseCase
}