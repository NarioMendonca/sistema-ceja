import { FastifyInstance } from "fastify";
import { fetchGradesByModule } from "./fetch-grades-by-module";
import { fetchGradesByUser } from "./fetch-grades-by-user";
import { createGrade } from "./create-grade";
import { deleteGrade } from "./delete-grade";

export function gradesRoutes(app: FastifyInstance) {
  app.get('/grades/:moduleId/module', fetchGradesByModule)
  app.get('/grades/:userId/user', fetchGradesByUser)
  app.post('/grades', createGrade)
  app.delete('/grades/:gradeId', deleteGrade)
}