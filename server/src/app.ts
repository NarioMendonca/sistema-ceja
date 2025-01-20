import fastify from 'fastify'
import fastifyJwt from '@fastify/jwt'
import { usersRoutes } from './controllers/users/users-routes'
import fastifyCookie from '@fastify/cookie'
import fastifyCors from '@fastify/cors'

const app = fastify()

app.register(fastifyCors, {
  methods: ['get', 'post', 'patch', 'delete'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  origin: process.env.FRONTEND_URL
})

app.register(fastifyCookie, {
  secret: process.env.COOKIE_SECRET
})

app.register(fastifyJwt, {
  secret: process.env.JWT_PASS!,
  cookie: {
    cookieName: 'refreshToken',
    signed: false
  },
  sign: {
    expiresIn: '30m',
  }
})

app.register(usersRoutes)

export default app
