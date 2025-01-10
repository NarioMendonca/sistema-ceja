import { makeFetchCourses } from "@/usecases/factories/courses";
import { FastifyReply, FastifyRequest } from "fastify";

export async function fetchCourses(request: FastifyRequest, reply: FastifyReply) {

  const fetchCourses = makeFetchCourses()

  try {
    fetchCourses.execute()
    return reply.status(201).send()
  } catch (err) {
    throw err
  }
}