import { RemoteAuthentication } from "@/data/use-cases/users/remote-authentication"
import { makeApiUrl } from "../infra/make-api-url"
import { makeHttpClient } from "../infra/make-http-client"

export function makeRemoteAuthentication() {
  const httpClient = makeHttpClient()
  const url = makeApiUrl('/auth')
  const remoteAuthentication = new RemoteAuthentication(url, httpClient)

  return remoteAuthentication
}