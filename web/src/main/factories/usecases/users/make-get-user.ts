import { RemoteGetUser } from "@/data/use-cases/users/remote-get-user";
import { makeApiUrl } from "../../infra/make-api-url";
import { makeHttpClient } from "../../infra/make-http-client";

export function makeGetUser() {
  const httpClient = makeHttpClient()
  const getUser = new RemoteGetUser(makeApiUrl('/user'), httpClient)
  return getUser
}