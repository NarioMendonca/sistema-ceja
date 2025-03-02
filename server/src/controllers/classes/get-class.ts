import { ResourceNotFoundError } from "@/erros";
import { makeGetClasses } from "@/usecases/factories/classes";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function getClass(request: FastifyRequest, reply: FastifyReply) {
  const createClassParamsSchema = z.object({
    classId: z.string().uuid(),
  })

  const { classId } = createClassParamsSchema.parse(request.params)

  const getClasses = makeGetClasses()

  try {
    const data = await getClasses.execute({ classId })
    return reply.status(200).send({ class: data.class })
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return reply.status(404).send()
    }

    throw err
  }
} 