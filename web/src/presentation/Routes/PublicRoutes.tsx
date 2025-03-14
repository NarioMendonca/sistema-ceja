import { Route } from "react-router-dom"
import { AuthPageLayout } from "../layouts/AuthPageLayout"
import { MakeLogin } from "@/main/factories/presentation/pages"
import { Profile } from "../pages/Profile/Profile"
import { Unauthorized } from "../pages/Errors/Unauthorized"
import { RouterManager } from "."

export const PublicRoutes: React.FC = () => {
  return (
    <>
      <Route element={<AuthPageLayout />}>
        <Route path="/login" element={<MakeLogin />} />
      </Route>
      <Route path="/perfil" element={<Profile />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<RouterManager />} />
    </>
  )
}