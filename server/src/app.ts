import fastify from 'fastify'
import fastifyJwt from '@fastify/jwt'
import { usersRoutes, subjectsRoutes } from './controllers'
import fastifyCookie from '@fastify/cookie'
import fastifyCors from '@fastify/cors'
import { classesRoutes } from './controllers/classes/classes-routes'
import { enrollmentsRoutes } from './controllers/enrollments/enrollments-routes'
import { env } from './env/env'
import { subjectTeacherRoutes } from './controllers/subjectTeacher/subjectTeacherRoutes'

const app = fastify()

app.register(fastifyCors, {
  methods: ['get', 'post', 'patch', 'delete'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  origin: env.FRONTEND_URL
})

app.register(fastifyCookie, {
  secret: env.COOKIE_SECRET
})

app.register(fastifyJwt, {
  secret: env.JWT_PASS,
  cookie: {
    cookieName: 'refreshToken',
    signed: false
  },
  sign: {
    expiresIn: '30m',
  }
})

app.register(usersRoutes)
app.register(subjectsRoutes)
app.register(classesRoutes)
app.register(enrollmentsRoutes)
app.register(subjectTeacherRoutes)

export default app
