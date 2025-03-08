import { makeFetchGradesByModule } from "@/usecases/factories/grades";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function fetchGradesByModule(request: FastifyRequest, reply: FastifyReply) {
  const fetchGradesByModuleParamsSchema = z.object({
    moduleId: z.string()
  })
  const { moduleId } = fetchGradesByModuleParamsSchema.parse(request.params)

  const fetchGradesByModule = makeFetchGradesByModule()
  const { grades } = await fetchGradesByModule.execute({ moduleId })
  return reply.status(200).send({ grades })
}