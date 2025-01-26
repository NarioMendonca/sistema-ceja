import { ResourceNotFoundError } from "@/usecases/errors";
import { makeFetchClassesBySubject } from "@/usecases/factories/classes/make-fetch-classes-by-subject";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function fetchClassesBySubject(request: FastifyRequest, reply: FastifyReply) {
  const fetchClassesBySubjectParamsSchema = z.object({
    subjectId: z.string().uuid(),
  })

  const { subjectId } = fetchClassesBySubjectParamsSchema.parse(request.params)

  const fetchClassesBySubject = makeFetchClassesBySubject()

  try {
    const { classes } = await fetchClassesBySubject.execute({ subjectId })
    return reply.status(200).send({ classes })
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return reply.status(404).send({ message: 'Subject not found.' })
    }

    throw err
  }
} 