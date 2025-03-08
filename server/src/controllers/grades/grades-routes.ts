import { FastifyInstance } from "fastify";
import { fetchGradesByModule } from "./fetch-grades-by-module";
import { fetchGradesByUser } from "./fetch-grades-by-user";

export function gradesRoutes(app: FastifyInstance) {
  app.get('/grades/:moduleId/module', fetchGradesByModule)
  app.get('/grades/:userId/user', fetchGradesByUser)
}