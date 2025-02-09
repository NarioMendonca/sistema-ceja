import { AlreadyExistsError, InvalidRoleError } from "@/usecases/errors";
import { makeRegisterUser } from "@/usecases/factories/users";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function registerUser(request: FastifyRequest, reply: FastifyReply) {
  const registerUserBodySchema = z.object({
    name: z.string(),
    email: z.string(),
    role: z.enum(['ADMIN', 'TEACHER', 'STUDENT']),
    birth: z.coerce.date().optional(),
    cpf: z.string().optional(),
    enrollmentCode: z.string().optional(),
    dateOfBirth: z.coerce.date().optional(),
    adress: z.string().optional(),
    specialization: z.string().optional(),
    education: z.string().optional(),
    position: z.string().optional()
  })

  const bodyData = registerUserBodySchema.parse(request.body)

  const registerUser = makeRegisterUser()

  try {
    const { user } = await registerUser.execute({ userData: bodyData })

    return reply.status(201).send({ user })
  } catch (err) {
    if (err instanceof AlreadyExistsError) {
      return reply.status(409).send({ message: 'A account with the same email already exists' })
    }

    if (err instanceof InvalidRoleError) {
      return reply.status(400).send({ message: 'body param role is invalid' })
    }

    throw err
  }
}