import { RemoteRegisterUser } from "@/data/use-cases/users/remote-register-user"
import { makeApiUrl } from "../../infra/make-api-url"
import { makeHttpClient } from "../../infra/make-http-client"

export function makeRegisterUser() {
  const httpClient = makeHttpClient()
  const registerUser = new RemoteRegisterUser(makeApiUrl('/users'), httpClient)
  return registerUser
}