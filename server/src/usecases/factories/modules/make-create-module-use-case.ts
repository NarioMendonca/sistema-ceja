import { makeModulesRepository } from "@/repositories/factories";
import { CreateModuleUseCase } from "@/usecases/modules/create-module";

export function makeCreateModuleUseCase() {
  const modulesRepository = makeModulesRepository()
  const createModuleUseCase = new CreateModuleUseCase(modulesRepository)
  return createModuleUseCase
}