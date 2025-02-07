
import { makeCreateModuleUseCase } from "@/usecases/factories/modules/make-create-module-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function createModule(request: FastifyRequest, reply: FastifyReply) {
  const createSubjectBodySchema = z.object({
    name: z.string().min(3),
    description: z.string().optional(),
    subjectId: z.string().uuid()
  })
  const { name, description, subjectId } = createSubjectBodySchema.parse(request.body)

  const createModule = makeCreateModuleUseCase()

  try {
    const { module } = await createModule.execute({ name, description, subjectId })
    return reply.status(201).send({ module })
  } catch (err) {
    throw err
  }
}