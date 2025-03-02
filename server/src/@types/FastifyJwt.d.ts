import '@fastify/jwt'

declare module '@fastify/jwt' {
  interface FastifyJWT {
    payload: { sub: string, role: UserRoles }
    user: {
      sub: string,
      role: UserRoles
    }
  }
}