import { makeFetchSubjectsByUserId } from "@/usecases/factories/TeacherSubjectAssignment/make-fetch-subjects-by-user-id";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function fetchSubjectsByUserId(request: FastifyRequest, reply: FastifyReply) {
  const fetchSubjectsByUserIdParamsSchema = z.object({
    userId: z.string().uuid()
  })
  const { userId } = fetchSubjectsByUserIdParamsSchema.parse(request.params)

  const fetchSubjectsByUserId = makeFetchSubjectsByUserId()
  const { subjects } = await fetchSubjectsByUserId.handle({ userId })

  return reply.status(200).send({ subjects })
}