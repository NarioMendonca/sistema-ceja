import { FastifyInstance } from "fastify";
import { RegisterSubjectTeacher } from "./register-subject-teacher";

export async function subjectTeacherRoutes(app: FastifyInstance) {
  app.post('/subjectTeacher', RegisterSubjectTeacher)
}