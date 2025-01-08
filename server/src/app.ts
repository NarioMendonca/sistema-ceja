import fastify from 'fastify'
import fastifyJwt from '@fastify/jwt'
import { usersRoutes } from './controllers/users/users-routes'
import fastifyCookie from '@fastify/cookie'

const app = fastify()

app.register(fastifyCookie)

app.register(fastifyJwt, {
  secret: process.env.JWT_PASS!
})

app.register(usersRoutes)

export default app
