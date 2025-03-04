import { makeFetchSubjectsByUserId } from "@/usecases/factories/TeacherSubjectAssignment/make-fetch-subjects-by-user-id";
import { makeFetchSubjectsMetricsByUserId } from "@/usecases/factories/TeacherSubjectAssignment/make-get-subjects-metrics-by-user-id";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function getSubjectsMetricsByUserId(request: FastifyRequest, reply: FastifyReply) {
  const fetchSubjectsByUserIdParamsSchema = z.object({
    userId: z.string().uuid()
  })
  const { userId } = fetchSubjectsByUserIdParamsSchema.parse(request.params)

  const fetchSubjectsMetricsByUserId = makeFetchSubjectsMetricsByUserId()
  const { subjectsMetrics } = await fetchSubjectsMetricsByUserId.handle({ userId })

  return reply.status(200).send({ subjectsMetrics })
}