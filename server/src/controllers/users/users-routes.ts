import { FastifyInstance } from "fastify";
import { fetchUsers } from "./fetch-users";
import { getUser } from "./get-user";
import { registerUser } from "./register-user";
import { authenticateUser } from "./authenticate-user";
import { refresh } from "./refresh";
import { getUsersMetrics } from "./get-users-metrics";

export function usersRoutes(app: FastifyInstance) {
  app.get('/users/metrics', getUsersMetrics)
  app.get('/user/:userId', getUser)
  app.get('/users', fetchUsers)

  app.post('/users', registerUser)
  app.post('/auth', authenticateUser)
  app.post('/token/refresh', refresh)
}