import { makeRemoteGetUserSession } from "@/main/factories/usecases/users/make-remote-get-user-session";
import { AuthProvider } from "@/presentation/context/AuthProvider";
import { PropsWithChildren } from "react";

export const MakeAuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const remoteGetUserSession = makeRemoteGetUserSession()
  return <AuthProvider remoteGetUserSession={remoteGetUserSession}>{children}</AuthProvider>
}