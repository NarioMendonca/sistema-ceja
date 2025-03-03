import { makeApiUrl } from "../../infra/make-api-url";
import { makePrivateHttpClient } from "../../infra/make-private-http-client";
import { RemoteLogout } from "@/data/use-cases/users/remote-logout";

export function makeLogout() {
  const privateHttpClient = makePrivateHttpClient()
  const logoutUseCase = new RemoteLogout(makeApiUrl('/sessions/logout'), privateHttpClient)
  return logoutUseCase
}