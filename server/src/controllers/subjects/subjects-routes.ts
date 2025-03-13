import { FastifyInstance } from "fastify";
import { createSubject, fetchSubjects, } from ".";
import { fetchSubjectsWithData } from "./fetch-subjects-with-data";

export async function subjectsRoutes(app: FastifyInstance) {
  app.get('/subjects', fetchSubjects)
  app.get('/subjects/all/:userId/students', fetchSubjectsWithData)
  app.post('/subjects', createSubject)
}