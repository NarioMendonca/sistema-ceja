import { FastifyInstance } from "fastify";
import { fetchUsers } from "./fetch-users";
import { getUser } from "./get-user";

export function usersRoutes(app: FastifyInstance) {
  app.get('/user/:userId', getUser)
  app.get('/users', fetchUsers)
}