import { FastifyInstance } from "fastify";
import { createSubject, fetchSubjects, } from ".";

export async function subjectsRoutes(app: FastifyInstance) {
  app.get('/subjects', fetchSubjects)
  app.post('/subjects', createSubject)
}