import { makeFetchGradesByUser } from "@/usecases/factories/grades";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function fetchGradesByUser(request: FastifyRequest, reply: FastifyReply) {
  const fetchGradesByUserParamsSchema = z.object({
    userId: z.string()
  })
  const { userId } = fetchGradesByUserParamsSchema.parse(request.params)

  const fetchGradesByUser = makeFetchGradesByUser()
  const { grades } = await fetchGradesByUser.execute({ userId })
  return reply.status(200).send({ grades })
}