import { makeGetUser } from "@/usecases/factories/users";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getUserSession(request: FastifyRequest, reply: FastifyReply) {
  const { sub } = request.user
  const getUser = makeGetUser()
  const { user } = await getUser.execute({ id: sub })

  return reply.status(200).send({ user })
}