import { FastifyInstance } from "fastify";
import { fetchModules } from "./fetch-modules";
import { createModule } from "./create-module";
import { fetchModulesBySubject } from "./fetch-modules-by-subject";

export async function modulesRoutes(app: FastifyInstance) {
  app.get('/modules', fetchModules)
  app.get('/modules/:subjectId', fetchModulesBySubject)

  app.post('/modules', createModule)
}