import { FastifyReply, FastifyRequest } from "fastify";

export async function refresh(request: FastifyRequest, reply: FastifyReply) {
  try {
    await request.jwtVerify({ onlyCookie: true })

    const { sub, role } = request.user

    const token = await reply.jwtSign({ sub, role })

    const refreshToken = await reply.jwtSign({ sub, role }, {
      sign: {
        expiresIn: '7d'
      },
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
      .send({ token, role })
  } catch (err: any) {
    return reply.status(401).send({ message: err.message ?? 'Invalid token' })
  }
} 