import { RemoteAuthentication } from "@/data/use-cases/users/remote-authentication"
import { makeApiUrl } from "../../infra/make-api-url"

export function makeRemoteAuthentication() {
  const url = makeApiUrl('/auth')
  const remoteAuthentication = new RemoteAuthentication(url)

  return remoteAuthentication
}