import { useContext } from "react"
import { AuthContext, AuthContextProps } from "../context/AuthProvider"

const useAuth = () => {
  return useContext(AuthContext) as AuthContextProps
}

export default useAuth