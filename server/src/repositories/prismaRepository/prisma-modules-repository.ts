import { Module } from "@/models/Modules";
import { createModuleParams, ModulesRepository } from "../modulesRepository";
import { prisma } from "@/lib/prisma";

export class PrismaModulesRepository implements ModulesRepository {
  async create(params: createModuleParams): Promise<Module> {
    const module = await prisma.modules.create({
      data: {
        name: params.name,
        description: params.description,
        subject_id: params.subjectId
      }
    })

    return module
  }

  async fetchAll(): Promise<Module[]> {
    const modules = await prisma.modules.findMany()
    return modules
  }

}