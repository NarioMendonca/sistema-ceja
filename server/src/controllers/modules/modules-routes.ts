import { FastifyInstance } from "fastify";
import { fetchModules } from "./fetch-modules";
import { createModule } from "./create-module";

export async function modulesRoutes(app: FastifyInstance) {
  app.get('/modules', fetchModules)
  app.post('/modules', createModule)
}