import fastify from 'fastify'
import { usersRoutes } from './controllers/users/users-routes'

const app = fastify()

app.register(usersRoutes)

export default app
