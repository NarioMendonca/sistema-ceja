import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GradesManagement } from "./presentation/pages/GradesManagement/GradesManagement"
import { Profile } from "./presentation/pages/Profile/Profile"
import { GradesView } from "./presentation/pages/GradesView/GradesView"
import { PageLayout } from "./presentation/layouts/PageLayout"
import {
  MakeDashboard,
  MakeUsersPage,
  MakeViewUser,
  MakeClasses,
  MakeSubjects,
  MakeLogin
} from "./main/factories/presentation/pages"
import { AuthPageLayout } from "./presentation/layouts/AuthPageLayout"
import { ProtectedRoute } from "./presentation/components/Routes/ProtectedRoute"
import { Role } from "./domain/models/User"
import { Unauthorized } from "./presentation/pages/Errors/Unauthorized"
import { MakeAuthProvider } from "./main/factories/presentation/context/MakeAuthProvider"
import { RouterManager } from "./presentation/components/Routes/RouterManager"
import { MakeSubjectDashboard } from "./main/factories/presentation/pages/MakeSubjectDashboard"

function App() {
  return (
    <MakeAuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route element={<ProtectedRoute requiredRoles={[Role.admin, Role.teacher, Role.student]} />}>
              <Route path="/home" element={<MakeDashboard />} />
            </Route>
            <Route element={<ProtectedRoute requiredRoles={[Role.admin]} />}>
              <Route path="/usuarios" element={MakeUsersPage()} />
              <Route path="/usuarios/visualizar" element={MakeViewUser()} />
              <Route path="/classes" element={MakeClasses()} />
            </Route>
            <Route element={<ProtectedRoute requiredRoles={[Role.admin, Role.teacher]} />}>
              <Route path="/materias" element={MakeSubjects()} />
              <Route path="/materias/modulos" element={MakeSubjectDashboard()} />
            </Route>
            <Route element={<ProtectedRoute requiredRoles={[Role.student]} />}>
              <Route path="/notas" element={<GradesView />} />
            </Route>
          </Route>
          <Route element={<AuthPageLayout />}>
            <Route path="/login" element={<MakeLogin />} />
          </Route>
          <Route path="/professor/notas" element={<GradesManagement />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<RouterManager />} />
        </Routes>
      </BrowserRouter>
    </MakeAuthProvider>
  )
}

export default App
