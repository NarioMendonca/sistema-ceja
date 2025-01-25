import z from 'zod'
import 'dotenv/config'

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  FRONTEND_URL: z.string().url(),
  JWT_PASS: z.string(),
  COOKIE_SECRET: z.string(),
  PORT: z.coerce.number()
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error('Missing environment variables!', _env.error.format())
  throw new Error('Missing environment variables!')
}

export const env = _env.data