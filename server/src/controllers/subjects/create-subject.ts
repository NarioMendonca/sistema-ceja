import { AlreadyExistsError } from "@/usecases/errors";
import { makeCreateSubject } from "@/usecases/factories/subjects";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function createSubject(request: FastifyRequest, reply: FastifyReply) {
  const createSubjectBodySchema = z.object({
    title: z.string().min(3),
    description: z.string().optional()
  })
  const { title, description } = createSubjectBodySchema.parse(request.body)

  const createSubject = makeCreateSubject()

  try {
    createSubject.execute({ title, description })
    return reply.status(201).send()
  } catch (err) {
    if (err instanceof AlreadyExistsError) {
      return reply.status(409).send({ message: "A Subject with the same title already exists." })
    }

    throw err
  }
}