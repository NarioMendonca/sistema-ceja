import { RemoteGetUserSession } from "@/data/use-cases/users/remote-get-user-session";
import { makeApiUrl } from "../../infra/make-api-url";
import { makePrivateHttpClient } from "../../infra/make-private-http-client";

export function makeRemoteGetUserSession() {
  const privateHttpClient = makePrivateHttpClient()
  const getUserSession = new RemoteGetUserSession(makeApiUrl('/users/me'), privateHttpClient)
  return getUserSession
}