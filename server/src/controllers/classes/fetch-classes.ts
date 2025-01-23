import { makeFetchClasses } from "@/usecases/factories/classes";
import { FastifyReply, FastifyRequest } from "fastify";

export async function fetchClasses(request: FastifyRequest, reply: FastifyReply) {

  const fetchClasses = makeFetchClasses()

  try {
    const { classes } = await fetchClasses.execute()
    return reply.status(200).send({ classes })
  } catch (err) {
    throw err
  }
}