import { RemoteFetchUsers } from "@/data/use-cases/users/remote-fetch-users";
import { makeApiUrl } from "../../infra/make-api-url";
import { makePrivateHttpClient } from "../../infra/make-private-http-client";

export function makeFetchUsers() {
  const httpClient = makePrivateHttpClient()
  const fetchUsers = new RemoteFetchUsers(makeApiUrl('/users'), httpClient)

  return fetchUsers
}