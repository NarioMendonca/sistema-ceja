import { InvalidCredentialsError } from "@/erros";
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
  const { user } = await authenticateUser.execute({ email, password })

  const token = await reply.jwtSign({ sub: user.id, role: user.role })
  const refreshToken = await reply.jwtSign({ sub: user.id, role: user.role }, {
    sign: {
      expiresIn: '7d'
    }
  })

  return reply
    .setCookie('refreshToken', refreshToken, {
      maxAge: 60 * 60 * 24 * 7, // 7 days
      httpOnly: true,
      secure: true,
      signed: true,
      path: '/'
    })
    .status(200)
    .send({ token, role: user.role })
}