import { RemoteRegisterUser } from "@/data/use-cases/users/remote-register-user"
import { makeApiUrl } from "../../infra/make-api-url"
import { makePrivateHttpClient } from "../../infra/make-private-http-client";

export function makeRegisterUser() {
  const httpClient = makePrivateHttpClient()
  const registerUser = new RemoteRegisterUser(makeApiUrl('/users'), httpClient)
  return registerUser
}