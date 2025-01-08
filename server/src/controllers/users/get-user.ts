import { makeGetUser } from "@/usecases/factories/users";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function getUser(request: FastifyRequest, reply: FastifyReply) {
  const getUserParamsSchema = z.object({
    userId: z.string().uuid()
  })

  const { userId } = getUserParamsSchema.parse(request.params)

  const getUser = makeGetUser()

  const { user } = await getUser.execute({ id: userId })

  return reply.status(200).send({ user })
}