import { NotFound } from "@/presentation/pages/Errors/NotFound"
import { useLocation, Navigate } from "react-router-dom"

export const RouterManager = () => {
  const location = useLocation()
  return location.pathname === '/' ? <Navigate to='/home' replace /> : <NotFound />
}