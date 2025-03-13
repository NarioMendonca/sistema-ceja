import { FastifyInstance } from "fastify";
import { registerStudentInClass } from ".";
import { fetchStudentsBySubject } from "./fetch-students-by-subject-id";
import { fetchStudentSubjects } from "./fetch-student-subjects";

export async function enrollmentsRoutes(app: FastifyInstance) {
  app.get('/enrollments/subjects/:userId/students', fetchStudentSubjects)
  app.get('/enrollments/students/:subjectId/subjects', fetchStudentsBySubject)
  app.post('/enrollments', registerStudentInClass)
}