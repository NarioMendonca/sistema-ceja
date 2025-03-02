import { PrivateAxiosHttpClient } from "@/infra/http/private-axios-http-client"

export const makePrivateHttpClient = () => {
  return new PrivateAxiosHttpClient()
}