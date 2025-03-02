import { User, UserRoles } from "@/domain/models/User";
import { GetUserSession } from "@/domain/use-cases/users/verifyUserSession";
import { createContext, useEffect, useState } from "react";

type Props = {
  remoteGetUserSession: GetUserSession
  children: React.ReactNode
}

type AuthProps = {
  role: UserRoles | null,
  user: User | null
}

export type AuthContextProps = {
  auth: AuthProps
  setAuth: React.Dispatch<React.SetStateAction<AuthProps>>,
  requestUserSession: () => Promise<void>
}

export const AuthContext = createContext<AuthContextProps | null>(null)

export const AuthProvider: React.FC<Props> = ({ children, remoteGetUserSession }) => {
  const [auth, setAuth] = useState<AuthProps>({
    role: null,
    user: null
  })

  const requestUserSession = async () => {
    try {
      const { user } = await remoteGetUserSession.handle()
      setAuth({ ...auth, role: user.role, user })
    } catch (err: any) {
      if (err.status === 401) {
        console.log('Not authenticated')
      }
      console.log('Internal server error')
    }
  }

  useEffect(() => {
    const handleRequestUserSession = async () => {
      await requestUserSession()
    }
    handleRequestUserSession()
  }, [])

  return (
    <AuthContext.Provider value={{ auth, setAuth, requestUserSession }}>
      {children}
    </AuthContext.Provider>
  )
}