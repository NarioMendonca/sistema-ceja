import { makeCreateGrade } from "@/usecases/factories/grades/make-create-grade";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function createGrade(request: FastifyRequest, reply: FastifyReply) {
  const createGradeBodySchema = z.object({
    moduleId: z.string().uuid(),
    userId: z.string().uuid(),
    gradeValue: z.coerce.number(),
    name: z.string().min(3).max(16)
  })
  const { userId, moduleId, gradeValue, name } = createGradeBodySchema.parse(request.body)
  const createGradeUseCase = makeCreateGrade()
  try {
    const { grade } = await createGradeUseCase.execute({ userId, gradeValue, moduleId, name })
    return reply.status(201).send({ grade })
  } catch (err) {
    throw err
  }
}