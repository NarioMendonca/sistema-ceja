import { makeFetchTeacherSubjectAssignmentBySubject } from "@/usecases/factories/subjectTeacher/make-fetch-subject-teacher-by-subject";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function fetchTeacherSubjectAssignmentsBySubject(request: FastifyRequest, reply: FastifyReply) {
  const fetchTeacherSubjectAssignmentsBySubjectParamsSchema = z.object({
    subjectId: z.string().uuid()
  })

  const { subjectId } = fetchTeacherSubjectAssignmentsBySubjectParamsSchema.parse(request.params)
  const fetchTeacherSubjectAssignmentsBySubject = makeFetchTeacherSubjectAssignmentBySubject()
  try {
    const { subjectTeachers } = await fetchTeacherSubjectAssignmentsBySubject.execute({ subjectId })
    return reply.status(201).send({ subjectTeachers })
  } catch (err) {
    throw err
  }
}