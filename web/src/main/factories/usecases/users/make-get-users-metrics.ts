import { makeApiUrl } from "../../infra/make-api-url";
import { makeHttpClient } from "../../infra/make-http-client";
import { RemoteGetUsersMetrics } from "@/data/use-cases/users/get-users-metrics";

export function makeRemoteGetUsersMetrics() {
  const httpClient = makeHttpClient()
  const usersMetrics = new RemoteGetUsersMetrics(makeApiUrl('/users/metrics'), httpClient)

  return usersMetrics
}