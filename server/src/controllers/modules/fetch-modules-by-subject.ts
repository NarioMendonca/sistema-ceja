import { makeFetchModulesBySubject } from "@/usecases/factories/modules/make-fetch-modules-by-subject";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function fetchModulesBySubject(request: FastifyRequest, reply: FastifyReply) {
  const fetchModulesBySubjectParamsSchema = z.object({
    subjectId: z.string().uuid()
  })
  const { subjectId } = fetchModulesBySubjectParamsSchema.parse(request.params)
  const fetchModulesBySubjectUseCase = makeFetchModulesBySubject()
  try {
    const { modules } = await fetchModulesBySubjectUseCase.execute({ subjectId })
    return reply.status(200).send({ modules })
  } catch (err) {
    throw err
  }
}