import { makeGetUsersMetrics } from "@/usecases/factories/users";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getUsersMetrics(request: FastifyRequest, reply: FastifyReply) {
  const getUsersMetrics = makeGetUsersMetrics()
  try {
    const { usersMetrics } = await getUsersMetrics.execute()
    return reply.status(200).send({ usersMetrics })
  } catch (err) {
    throw err
  }
}