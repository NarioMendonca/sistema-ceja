// import 'module-alias/register'
import fastify from 'fastify'
import fastifyJwt from '@fastify/jwt'
import fastifyCookie from '@fastify/cookie'
import fastifyCors from '@fastify/cors'
import {
  usersRoutes,
  subjectsRoutes,
  classesRoutes,
  enrollmentsRoutes,
  modulesRoutes,
  subjectTeacherRoutes,
  gradesRoutes
} from './controllers'
import { env } from './env/env'
import { errorHandler } from './erros/errorHandler'

const app = fastify()

app.register(fastifyCors, {
  methods: ['get', 'post', 'patch', 'delete'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  origin: env.FRONTEND_URL,
  credentials: true
})

app.register(fastifyCookie, {
  secret: env.COOKIE_SECRET
})

app.register(fastifyJwt, {
  secret: env.JWT_PASS,
  sign: {
    expiresIn: '5m'
  },
  cookie: {
    cookieName: 'refreshToken',
    signed: true
  }
})

app.register(usersRoutes)
app.register(subjectsRoutes)
app.register(classesRoutes)
app.register(enrollmentsRoutes)
app.register(subjectTeacherRoutes)
app.register(modulesRoutes)
app.register(gradesRoutes)

app.setErrorHandler(errorHandler)

export default app
