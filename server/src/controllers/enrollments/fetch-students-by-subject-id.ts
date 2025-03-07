import { makeFetchStudentsBySubjectId } from "@/usecases/factories/enrollments/make-fetch-students-by-subject-id";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function fetchStudentsBySubject(request: FastifyRequest, reply: FastifyReply) {
  const fetchStudentsBySubjectParams = z.object({
    subjectId: z.string().uuid()
  })
  const { subjectId } = fetchStudentsBySubjectParams.parse(request.params)
  const fetchStudentsBySubjectId = makeFetchStudentsBySubjectId()
  try {
    const { students } = await fetchStudentsBySubjectId.execute({ subjectId })
    return reply.status(200).send({ students })
  } catch (err) {
    throw err
  }
}