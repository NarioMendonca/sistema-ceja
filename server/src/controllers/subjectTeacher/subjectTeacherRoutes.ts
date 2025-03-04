import { FastifyInstance } from "fastify";
import {
  RegisterTeacherSubjectAssignment,
  fetchSubjectsByUserId,
  fetchTeacherSubjectAssignmentsBySubject,
  getSubjectsMetricsByUserId
} from ".";

export async function subjectTeacherRoutes(app: FastifyInstance) {
  app.get('/subjectTeacher/:subjectId/subject', fetchTeacherSubjectAssignmentsBySubject)
  app.get('/subjects/:userId/teacher', fetchSubjectsByUserId)
  app.get('/subjects/metrics/:userId/teacher', getSubjectsMetricsByUserId)
  app.post('/subjectTeacher', RegisterTeacherSubjectAssignment)
}