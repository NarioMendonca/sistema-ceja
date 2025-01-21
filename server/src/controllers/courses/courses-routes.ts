import { FastifyInstance } from "fastify";
import { createCourse, fetchCourses, } from "./";

export async function coursesRoutes(app: FastifyInstance) {
  app.get('/courses', fetchCourses)
  app.post('/courses', createCourse)
}