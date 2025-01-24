import { makeFetchStudentsByClass } from "@/usecases/factories/enrollments";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function fetchStudentsByClass(request: FastifyRequest, reply: FastifyReply) {
  const fetchStudentsByClassParamsSchema = z.object({
    classId: z.string().uuid(),
  })
  const { classId } = fetchStudentsByClassParamsSchema.parse(request.params)
  const fetchStudentsByClass = makeFetchStudentsByClass()
  try {
    const { students } = await fetchStudentsByClass.execute({ classId })
    return reply.status(200).send({ students })
  } catch (err) {
    throw err
  }
}