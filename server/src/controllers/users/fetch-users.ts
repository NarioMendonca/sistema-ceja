import { makeFetchUsers } from "@/usecases/factories/users";
import { FastifyReply, FastifyRequest } from "fastify";

export async function fetchUsers(request: FastifyRequest, reply: FastifyReply) {
  const fetchUsers = makeFetchUsers()
  const users = fetchUsers.execute()

  return reply.status(200).send({ users })
}