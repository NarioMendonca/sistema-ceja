import { makeDeleteGrade } from "@/usecases/factories/grades/make-delete-grade";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function deleteGrade(request: FastifyRequest, reply: FastifyReply) {
  const createGradeParamsSchema = z.object({
    gradeId: z.string().uuid(),
  })
  const { gradeId } = createGradeParamsSchema.parse(request.params)
  const deleteGradeUseCase = makeDeleteGrade()

  await deleteGradeUseCase.execute({ gradeId })
  return reply.status(201).send()
}