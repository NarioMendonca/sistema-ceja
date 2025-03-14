import { User, UserRoles } from "@/domain/models/User";
import { GetUserSession } from "@/domain/use-cases/users/verifyUserSession";
import { createContext, useEffect, useState } from "react";
import { UnauthorizedError } from "@/domain/errors";
import { Loading } from "../Routes/Loading";
import { Logout } from "@/domain/use-cases/users/logout";

type Props = {
  remoteGetUserSession: GetUserSession
  remoteLogout: Logout
  children: React.ReactNode
}

type AuthProps = {
  role: UserRoles | null,
  user: User | null
}

export type AuthContextProps = {
  auth: AuthProps
  setAuth: React.Dispatch<React.SetStateAction<AuthProps>>,
  requestUserSession: () => Promise<void>,
  logout: () => Promise<void>
  isLoading: boolean,
}

export const AuthContext = createContext<AuthContextProps | null>(null)

export const AuthProvider: React.FC<Props> = ({ children, remoteGetUserSession, remoteLogout }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [auth, setAuth] = useState<AuthProps>({
    role: null,
    user: null
  })

  const requestUserSession = async () => {
    try {
      const { user } = await remoteGetUserSession.handle()
      setAuth({ ...auth, role: user.role, user })
    } catch (error: any) {
      if (error instanceof UnauthorizedError) {
        console.log('Not authenticated')
        return
      }
      console.log('Internal server error')
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    localStorage.clear()
    setAuth({ role: null, user: null })
    await remoteLogout.handle()
  }


  useEffect(() => {
    const handleRequestUserSession = async () => {
      await requestUserSession()
    }
    handleRequestUserSession()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth, requestUserSession, isLoading, logout }}>
      {children}
    </AuthContext.Provider>
  )
}