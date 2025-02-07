import { makeFetchModulesUseCase } from "@/usecases/factories/modules/make-fetch-modules-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function fetchModules(request: FastifyRequest, reply: FastifyReply) {
  const fetchModules = makeFetchModulesUseCase()
  try {
    const { modules } = await fetchModules.execute()
    return reply.status(200).send({ modules })
  } catch (err) {
    throw err
  }
}