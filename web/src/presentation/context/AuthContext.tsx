import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode
}

export const AuthContext = createContext({} as any)

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [auth, setAuth] = useState<any>({})

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}