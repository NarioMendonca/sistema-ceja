import { makeFetchCourses } from "@/usecases/factories/courses";
import { FastifyReply, FastifyRequest } from "fastify";

export async function fetchCourses(request: FastifyRequest, reply: FastifyReply) {

  const fetchCourses = makeFetchCourses()

  try {
    const { courses } = await fetchCourses.execute()
    return reply.status(200).send({ courses })
  } catch (err) {
    throw err
  }
}