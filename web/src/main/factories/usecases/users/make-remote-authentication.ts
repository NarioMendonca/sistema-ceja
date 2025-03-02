import { RemoteAuthentication } from "@/data/use-cases/users/remote-authentication"
import { makeApiUrl } from "../../infra/make-api-url"
import { makePrivateHttpClient } from "../../infra/make-private-http-client"

export function makeRemoteAuthentication() {
  const privateHttpClient = makePrivateHttpClient()
  const remoteAuthentication = new RemoteAuthentication(makeApiUrl('/sessions'), privateHttpClient)


  return remoteAuthentication
}