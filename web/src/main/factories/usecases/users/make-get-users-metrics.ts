import { makeApiUrl } from "../../infra/make-api-url";
import { RemoteGetUsersMetrics } from "@/data/use-cases/users/get-users-metrics";
import { makePrivateHttpClient } from "../../infra/make-private-http-client";

export function makeRemoteGetUsersMetrics() {
  const httpClient = makePrivateHttpClient()
  const usersMetrics = new RemoteGetUsersMetrics(makeApiUrl('/users/metrics'), httpClient)

  return usersMetrics
}