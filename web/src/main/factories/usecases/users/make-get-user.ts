import { RemoteGetUser } from "@/data/use-cases/users/remote-get-user";
import { makeApiUrl } from "../../infra/make-api-url";
import { makePrivateHttpClient } from "../../infra/make-private-http-client";

export function makeGetUser() {
  const httpClient = makePrivateHttpClient()
  const getUser = new RemoteGetUser(makeApiUrl('/user'), httpClient)
  return getUser
}