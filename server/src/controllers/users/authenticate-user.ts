import { InvalidCredentialsError } from "@/usecases/errors";
import { makeAuthenticateUser } from "@/usecases/factories/users";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function authenticateUser(request: FastifyRequest, reply: FastifyReply) {
  const authenticateUserBodySchema = z.object({
    email: z.string().email(),
    password: z.string()
  })
  const { email, password } = authenticateUserBodySchema.parse(request.body)

  const authenticateUser = makeAuthenticateUser()

  try {
    const { user } = await authenticateUser.execute({ email, password })

    const token = await reply.jwtSign({}, {
      sign: {
        sub: user.id,
      }
    })

    const refreshToken = await reply.jwtSign({}, {
      sign: {
        sub: user.id,
        expiresIn: '7d'
      }
    })

    return reply
      .setCookie('refreshToken', refreshToken, {
        domain: process.env.API_URL,
        secure: true,
        httpOnly: true,
        path: '/',
        sameSite: true
      })
      .status(200)
      .send({ token })

  } catch (err) {
    if (err instanceof InvalidCredentialsError) {
      return reply.status(401).send({ message: 'Invalid crendentials. ' })
    }
    throw err
  }
}