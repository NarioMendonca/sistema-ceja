import { env } from "@/main/env/env";

export function makeApiUrl(url: string) {
  return `${env.VITE_API_URL}${url}`
}