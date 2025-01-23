import { Login } from "@/presentation/pages/Login/Login";
import { makeRemoteAuthentication } from "../usecases/users/make-remote-authentication";

export function makeLogin() {
  const remoteAuthentication = makeRemoteAuthentication()
  const login = Login({ authentication: remoteAuthentication })

  return login
}