import { FastifyReply, FastifyRequest } from "fastify";

type jwtPayload = {
  sub: string
}

export async function refresh(request: FastifyRequest, reply: FastifyReply) {
  const tokenData = await request.jwtVerify<jwtPayload>({ onlyCookie: true })

  const token = await reply.jwtSign({}, {
    sign: {
      sub: tokenData.sub
    }
  })

  const refreshToken = await reply.jwtSign({}, {
    sign: {
      sub: tokenData.sub,
      expiresIn: '7d'
    },
  })

  return reply
    .setCookie('refreshToken', refreshToken, {
      domain: process.env.API_URL,
      httpOnly: true,
      secure: true,
      sameSite: true,
      path: '/'
    })
    .status(200)
    .send({ token })
} 