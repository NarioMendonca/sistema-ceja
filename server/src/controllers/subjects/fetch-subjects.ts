import { makeFetchSubjects } from "@/usecases/factories/subjects";
import { FastifyReply, FastifyRequest } from "fastify";

export async function fetchSubjects(request: FastifyRequest, reply: FastifyReply) {

  const fetchSubjects = makeFetchSubjects()

  try {
    const { subjects } = await fetchSubjects.execute()
    return reply.status(200).send({ subjects })
  } catch (err) {
    throw err
  }
}