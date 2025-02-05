import { makeFetchSubjectTeacherBySubject } from "@/usecases/factories/subjectTeacher/make-fetch-subject-teacher-by-subject";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function fetchSubjectTeacherBySubject(request: FastifyRequest, reply: FastifyReply) {
  const FetchSubjectTeacherBySubjectParamsSchema = z.object({
    subjectId: z.string().uuid()
  })

  const { subjectId } = FetchSubjectTeacherBySubjectParamsSchema.parse(request.params)
  const fetchSubjectTeacherBySubject = makeFetchSubjectTeacherBySubject()
  try {
    const { subjectTeachers } = await fetchSubjectTeacherBySubject.execute({ subjectId })
    return reply.status(201).send({ subjectTeachers })
  } catch (err) {
    throw err
  }
}