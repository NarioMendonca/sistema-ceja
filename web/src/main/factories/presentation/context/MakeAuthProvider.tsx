import { makeRemoteGetUserSession } from "@/main/factories/usecases/users/make-remote-get-user-session";
import { AuthProvider } from "@/presentation/context/AuthProvider";
import { PropsWithChildren } from "react";
import { makeLogout } from "../../usecases/users/make-remote-logout";

export const MakeAuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const remoteGetUserSession = makeRemoteGetUserSession()
  const remoteLogout = makeLogout()
  return <AuthProvider remoteGetUserSession={remoteGetUserSession} remoteLogout={remoteLogout}>{children}</AuthProvider>
}