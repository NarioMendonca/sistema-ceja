import { UnauthorizedError } from "@/erros/UnauthorizedError";
import { FastifyReply, FastifyRequest } from "fastify";

export const verifyJwt = async (request: FastifyRequest, reply: FastifyReply) => {
  if (!request.headers.authorization) {
    throw new UnauthorizedError('Token not found')
  }
  try {
    await request.jwtVerify({ onlyCookie: false })
  } catch (err: any) {
    throw new UnauthorizedError(err.message ?? 'Unauthorized')
  }
}