import { ResourceNotFoundError } from "@/usecases/errors";
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
    if (err instanceof ResourceNotFoundError) {
      return reply.status(404).send({ message: "Turma não encontrada." })
    }
    throw err
  }
}