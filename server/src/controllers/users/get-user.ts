import { makeGetUser } from "@/usecases/factories/users";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function getUser(request: FastifyRequest, reply: FastifyReply) {
  const getUserBodySchema = z.object({
    userId: z.string().uuid()
  })

  const { userId } = getUserBodySchema.parse(request.body)

  const getUser = makeGetUser()

  const user = getUser.execute({ id: userId })

  return reply.status(200).send({ user })
}