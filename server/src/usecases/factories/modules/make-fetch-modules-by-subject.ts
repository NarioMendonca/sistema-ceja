import { makeModulesRepository } from "@/repositories/factories"
import { FetchModulesBySubjectUseCase } from "@/usecases/modules/fetch-modules-by-subject"

export function makeFetchModulesBySubject() {
  const modulesRepository = makeModulesRepository()
  const fetchModulesBySubjectUseCase = new FetchModulesBySubjectUseCase(modulesRepository)
  return fetchModulesBySubjectUseCase
}