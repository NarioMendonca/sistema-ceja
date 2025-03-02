import { FastifyInstance } from "fastify";
import { fetchUsers } from "./fetch-users";
import { getUser } from "./get-user";
import { registerUser } from "./register-user";
import { authenticateUser } from "./authenticate-user";
import { refresh } from "./refresh";
import { getUsersMetrics } from "./get-users-metrics";
import { getUserSession } from "./get-user-session";
import { verifyJwt } from "@/middlewares/verifyJwt";

export function usersRoutes(app: FastifyInstance) {
  app.get('/users/metrics', getUsersMetrics)
  app.get('/user/:userId', getUser)
  app.get('/users', fetchUsers)
  app.get('/users/me', { preHandler: [verifyJwt] }, getUserSession)

  app.post('/users', registerUser)
  app.post('/sessions', authenticateUser)
  app.get('/sessions/refresh', refresh)
}