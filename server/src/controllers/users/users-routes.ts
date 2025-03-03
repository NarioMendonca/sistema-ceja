import { FastifyInstance } from "fastify";
import { fetchUsers } from "./fetch-users";
import { getUser } from "./get-user";
import { registerUser } from "./register-user";
import { authenticateUser } from "./authenticate-user";
import { refresh } from "./refresh";
import { getUsersMetrics } from "./get-users-metrics";
import { getUserSession } from "./get-user-session";
import { verifyJwt } from "@/middlewares/verifyJwt";
import { logout } from "./logout";

export function usersRoutes(app: FastifyInstance) {
  app.get('/users/metrics', { preHandler: [verifyJwt] }, getUsersMetrics)
  app.get('/user/:userId', { preHandler: [verifyJwt] }, getUser)
  app.get('/users', { preHandler: [verifyJwt] }, fetchUsers)
  app.get('/users/me', { preHandler: [verifyJwt] }, getUserSession)
  app.get('/sessions/logout', logout)

  app.post('/users', { preHandler: [verifyJwt] }, registerUser)
  app.post('/sessions', authenticateUser)
  app.get('/sessions/refresh', refresh)
}