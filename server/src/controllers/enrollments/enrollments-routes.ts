import { FastifyInstance } from "fastify";
import { fetchStudentsByClass, fetchStudentsWithClasses } from ".";

export async function enrollmentsRoutes(app: FastifyInstance) {
  app.get('/enrollments/:classId', fetchStudentsByClass)
  app.get('/enrollments/students/classes', fetchStudentsWithClasses)
}