import { FastifyInstance } from "fastify";
import { registerStudentInClass } from ".";
import { fetchStudentsBySubject } from "./fetch-students-by-subject-id";

export async function enrollmentsRoutes(app: FastifyInstance) {
  app.get('/enrollments/students/:subjectId/subjects', fetchStudentsBySubject)
  app.post('/enrollments', registerStudentInClass)
}