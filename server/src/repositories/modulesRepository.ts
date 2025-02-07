import { Module } from "@/models/Modules"

export type createModuleParams = {
  name: string
  description?: string
  subjectId: string
}

export interface ModulesRepository {
  create(params: createModuleParams): Promise<Module>
  fetchAll(): Promise<Module[]>
  fetchBySubjectId(subjectId: string): Promise<Module[]>
}