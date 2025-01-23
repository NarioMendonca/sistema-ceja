import { RemoteFetchUsers } from "@/data/use-cases/users/remote-fetch-users";
import { makeApiUrl } from "../../infra/make-api-url";
import { makeHttpClient } from "../../infra/make-http-client";

export function makeFetchUsers() {
  const httpClient = makeHttpClient()
  const fetchUsers = new RemoteFetchUsers(makeApiUrl('/users'), httpClient)

  return fetchUsers
}