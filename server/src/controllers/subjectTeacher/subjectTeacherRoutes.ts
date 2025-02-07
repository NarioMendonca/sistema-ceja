import { FastifyInstance } from "fastify";
import { RegisterTeacherSubjectAssignment } from "./register-subject-teacher";
import { fetchTeacherSubjectAssignmentsBySubject } from "./fetch-subject-teacher-by-subject";

export async function subjectTeacherRoutes(app: FastifyInstance) {
  app.get('/subjectTeacher/:subjectId/subject', fetchTeacherSubjectAssignmentsBySubject)
  app.post('/subjectTeacher', RegisterTeacherSubjectAssignment)
}