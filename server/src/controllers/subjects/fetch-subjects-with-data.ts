import { makeFetchSubjectsWithData } from "@/usecases/factories/subjects/make-fetch-subjects-with-data";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function fetchSubjectsWithData(request: FastifyRequest, reply: FastifyReply) {
  const fetchSubjectsWithDataParams = z.object({
    userId: z.string().uuid()
  })

  const { userId } = fetchSubjectsWithDataParams.parse(request.params)

  const fetchSubjects = makeFetchSubjectsWithData()

  const { subjects } = await fetchSubjects.execute({ userId })
  return reply.status(200).send({ subjects })
}