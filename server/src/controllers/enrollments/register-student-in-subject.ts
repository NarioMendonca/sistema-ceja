import { makeRegisterStudentInClass } from "@/usecases/factories/enrollments";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function registerStudentInClass(request: FastifyRequest, reply: FastifyReply) {
  const registerStudentInClassParams = z.object({
    subjectId: z.string().uuid(),
    userId: z.string().uuid()
  })
  const { subjectId, userId } = registerStudentInClassParams.parse(request.body)
  const registerStudentInClass = makeRegisterStudentInClass()
  try {
    await registerStudentInClass.execute({ subjectId, userId })
    return reply.status(201).send({ message: 'created' })
  } catch (err) {
    throw err
  }
}