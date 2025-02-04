import { makeFetchUsers } from "@/usecases/factories/users";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function fetchUsers(request: FastifyRequest, reply: FastifyReply) {
  const fetchUsersQuerySchema = z.object({
    role: z.enum(['ADMIN', 'TEACHER', 'STUDENT']).optional()
  })
  const { role } = fetchUsersQuerySchema.parse(request.query)
  const fetchUsers = makeFetchUsers()
  const { users } = await fetchUsers.execute({ role })

  return reply.status(200).send({ users })
}