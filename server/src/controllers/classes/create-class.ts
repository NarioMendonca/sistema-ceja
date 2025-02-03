import { AlreadyExistsError } from "@/usecases/errors";
import { makeCreateClass } from "@/usecases/factories/classes";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function createClass(request: FastifyRequest, reply: FastifyReply) {
  const createClassBodySchema = z.object({
    name: z.string().min(2),
  })
  const { name } = createClassBodySchema.parse(request.body)
  const createClass = makeCreateClass()

  try {
    const { class: classData } = await createClass.execute({ name })
    return reply.status(201).send({ class: classData })
  } catch (err) {
    if (err instanceof AlreadyExistsError) {
      return reply.status(409).send({ message: "A Class with the same title already exists." })
    }
    throw err
  }
}