import { FastifyInstance } from "fastify";
import { fetchUsers } from "./fetch-users";
import { getUser } from "./get-user";
import { registerUser } from "./register-user";
import { authenticateUser } from "./authenticate-user";

export function usersRoutes(app: FastifyInstance) {
  app.get('/user/:userId', getUser)
  app.get('/users', fetchUsers)

  app.post('/users', registerUser)
  app.post('/auth', authenticateUser)
}