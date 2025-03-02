import { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import { ZodError } from "zod";
import { GenericError } from "./GenericError";

export const errorHandler = (error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
  if (error instanceof GenericError) {
    return reply.status(error.statusCode).send({
      message: 'Api error',
      error: error.message,
      details: error.details
    })
  }

  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: 'Invalid data',
      error: error.format()
    })
  }

  return reply.status(500).send({ message: 'Internal server error', error: error.message })
}