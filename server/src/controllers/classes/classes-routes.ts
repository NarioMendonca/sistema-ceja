import { FastifyInstance } from "fastify";
import { fetchClasses } from "./fetch-classes";
import { getClass } from "./get-class";
import { createClass } from "./create-class";
import { deleteClass } from "./delete-class";

export async function classesRoutes(app: FastifyInstance) {
  app.get('/classes', fetchClasses)
  app.get('/classes/:classId', getClass)

  app.post('/classes', createClass)

  app.delete('/classes/:classId', deleteClass)
}