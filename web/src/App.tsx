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
  MakeSubjectModules,
  MakeCourses,
  MakeLogin
} from "./main/factories/presentation/pages"
import { AuthPageLayout } from "./presentation/layouts/AuthPageLayout"
import { ProtectedRoute } from "./presentation/components/Routes/ProtectedRoute"
import { UserRolesEnum } from "./domain/models/User"
import { Unauthorized } from "./presentation/pages/Errors/Unauthorized"
import { MakeAuthProvider } from "./main/factories/presentation/context/MakeAuthProvider"
import { RouterManager } from "./presentation/components/Routes/RouterManager"

function App() {
  return (
    <MakeAuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route element={<ProtectedRoute requiredRoles={[UserRolesEnum.admin, UserRolesEnum.teacher, UserRolesEnum.student]} />}>
              <Route path="/home" element={<MakeDashboard />} />
            </Route>
            <Route element={<ProtectedRoute requiredRoles={[UserRolesEnum.admin]} />}>
              <Route path="/usuarios" element={MakeUsersPage()} />
              <Route path="/usuarios/visualizar" element={MakeViewUser()} />
              <Route path="/materias" element={MakeCourses()} />
              <Route path="/materias/modulos" element={MakeSubjectModules()} />
              <Route path="/classes" element={MakeClasses()} />
            </Route>
          </Route>
          <Route element={<AuthPageLayout />}>
            <Route path="/login" element={<MakeLogin />} />
          </Route>
          <Route path="/professor/notas" element={<GradesManagement />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/notas" element={<GradesView />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<RouterManager />} />
        </Routes>
      </BrowserRouter>
    </MakeAuthProvider>
  )
}

export default App
