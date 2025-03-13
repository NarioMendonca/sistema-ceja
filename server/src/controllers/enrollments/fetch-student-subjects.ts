import { makeFetchStudentSubjects } from "@/usecases/factories/enrollments/make-fetch-student-subjects";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function fetchStudentSubjects(request: FastifyRequest, reply: FastifyReply) {
  const fetchStudentSubjectsParams = z.object({
    userId: z.string().uuid()
  })
  const { userId } = fetchStudentSubjectsParams.parse(request.params)
  const fetchStudentSubjects = makeFetchStudentSubjects()
  try {
    const { subjects } = await fetchStudentSubjects.execute({ userId })
    return reply.status(200).send({ subjects })
  } catch (err) {
    throw err
  }
}