import { AlreadyExistsError } from "@/usecases/errors";
import { makeCreateCourse } from "@/usecases/factories/courses/make-create-course";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function createCourse(request: FastifyRequest, reply: FastifyReply) {
  const createCourseBodySchema = z.object({
    title: z.string().min(3),
    description: z.string().optional()
  })
  const { title, description } = createCourseBodySchema.parse(request.body)

  const createCourse = makeCreateCourse()

  try {
    createCourse.execute({ title, description })
    return reply.status(201).send()
  } catch (err) {
    if (err instanceof AlreadyExistsError) {
      return reply.status(409).send({ message: "A course with the same title already exists." })
    }

    throw err
  }
}