import { InvalidCredentialsError, InvalidPermissionError, ResourceNotFoundError } from "@/erros";
import { makeDeleteClass, makeFetchClasses } from "@/usecases/factories/classes";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function deleteClass(request: FastifyRequest, reply: FastifyReply) {
  const deleteClassBodySchema = z.object({
    adminId: z.string().uuid(),
    adminPassword: z.string(),
    classId: z.string().uuid()
  })

  const { adminId, adminPassword, classId } = deleteClassBodySchema.parse(request.body)

  const deleteClass = makeDeleteClass()

  try {
    await deleteClass.execute({ adminId, adminPassword, classId })

    return reply.status(204).send()
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return reply.status(404).send({ message: "Resource not found." })
    }

    if (err instanceof InvalidPermissionError) {
      return reply.status(403).send({ message: "Invalid permission to acess that." })
    }

    if (err instanceof InvalidCredentialsError) {
      return reply.status(401).send({ message: "invalid credentials." })
    }

    throw err
  }
}