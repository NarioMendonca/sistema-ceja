import { UserRoles } from "@/domain/models/User"
import useAuth from "@/presentation/hooks/useAuth"
import { Navigate, Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"

type ProtectedRouteProps = {
  requiredRoles: UserRoles[]
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ requiredRoles }) => {
  const { auth } = useAuth()
  const location = useLocation()

  const isUserRoleValid = requiredRoles.find(requiredRole => requiredRole === auth.role)

  return (
    auth.role && isUserRoleValid
      ? <Outlet />
      : auth?.role
        ? <Navigate to='/unauthorized' replace />
        : <Navigate to='/login' state={{ from: location }} replace />
  )
}