import { Login } from "@/presentation/pages/Login/Login";
import { makeRemoteAuthentication } from "../../usecases/users/make-remote-authentication";

export function MakeLogin() {
  const remoteAuthentication = makeRemoteAuthentication()
  return <Login remoteAuthentication={remoteAuthentication} />
}