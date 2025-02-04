import { makeRegisterSubjectTeacher } from "@/usecases/factories/subjectTeacher/make-register-subject-teacher";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function RegisterSubjectTeacher(request: FastifyRequest, reply: FastifyReply) {
  const RegisterSubjectTeacherBodySchema = z.object({
    userId: z.string().uuid(),
    subjectId: z.string().uuid()
  })
  const { userId, subjectId } = RegisterSubjectTeacherBodySchema.parse(request.body)
  const registerSubjectTeacher = makeRegisterSubjectTeacher()
  try {
    await registerSubjectTeacher.execute({ userId, subjectId })
    return reply.status(201).send()
  } catch (err) {
    throw err
  }
}