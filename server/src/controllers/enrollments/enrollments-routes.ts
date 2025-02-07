import { FastifyInstance } from "fastify";
import { registerStudentInClass } from ".";

export async function enrollmentsRoutes(app: FastifyInstance) {
  app.post('/enrollments', registerStudentInClass)
}