import { FastifyInstance } from "fastify";
import { fetchClasses } from "./fetch-classes";
import { getClass } from "./get-class";
import { createClass } from "./create-class";
import { deleteClass } from "./delete-class";
import { fetchClassesBySubject } from "./fetch-classes-by-subject";

export async function classesRoutes(app: FastifyInstance) {
  app.get('/classes', fetchClasses)
  app.get('/classes/:classId', getClass)
  app.get('/classes/subject/:subjectId', fetchClassesBySubject)

  app.post('/classes', createClass)

  app.delete('/classes/:classId', deleteClass)
}