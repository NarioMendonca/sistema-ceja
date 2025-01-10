import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string().url()
})

const _env = envSchema.safeParse(import.meta.env)

if (!_env.success) {
  console.error('Missing environment variables!', _env.error.format())
  throw new Error('Missing environment variables!')
}

export const env = _env.data