import { Route } from "react-router-dom"
import { ProtectedRoute } from "./ProtectedRoute"
import {
  MakeClasses,
  MakeDashboard,
  MakeSubjects,
  MakeUsersPage,
  MakeViewUser,
  MakeGradesView,
  MakeSubjectDashboard
} from "@/main/factories/presentation/pages"
import { Role } from "@/domain/models/User"
import { PageLayout } from "../layouts/PageLayout"
import { GradesManagement } from "../pages/GradesManagement/GradesManagement"

export const PrivateRoutes: React.FC = () => {
  return (
    <Route element={<PageLayout />}>
      <Route element={<ProtectedRoute requiredRoles={[Role.admin, Role.teacher, Role.student]} />}>
        <Route path="/home" element={<MakeDashboard />} />
      </Route>

      <Route element={<ProtectedRoute requiredRoles={[Role.admin]} />}>
        <Route path="/usuarios" element={MakeUsersPage()} />
        <Route path="/usuarios/visualizar" element={MakeViewUser()} />
        <Route path="/classes" element={MakeClasses()} />
      </Route>

      <Route element={<ProtectedRoute requiredRoles={[Role.teacher]} />}>
        <Route path="/professor/notas" element={<GradesManagement />} />
      </Route>

      <Route element={<ProtectedRoute requiredRoles={[Role.student]} />}>
        <Route path="/notas" element={<MakeGradesView />} />
      </Route>

      <Route element={<ProtectedRoute requiredRoles={[Role.admin, Role.teacher]} />}>
        <Route path="/materias" element={MakeSubjects()} />
        <Route path="/materias/modulos" element={MakeSubjectDashboard()} />
      </Route>
    </Route>
  )
}