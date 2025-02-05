import { FastifyInstance } from "fastify";
import { RegisterSubjectTeacher } from "./register-subject-teacher";
import { fetchSubjectTeacherBySubject } from "./fetch-subject-teacher-by-subject";

export async function subjectTeacherRoutes(app: FastifyInstance) {
  app.get('/subjectTeacher/:subjectId/subject', fetchSubjectTeacherBySubject)
  app.post('/subjectTeacher', RegisterSubjectTeacher)
}