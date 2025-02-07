import { BrowserRouter, Routes, Route } from "react-router"
import { GradesManagement } from "./presentation/pages/GradesManagement/GradesManagement"
import { Profile } from "./presentation/pages/Profile/Profile"
import { GradesView } from "./presentation/pages/GradesView/GradesView"
import { PageLayout } from "./presentation/layouts/PageLayout"
import { makeLogin } from "./main/factories/pages/make-login"
import { makeUsersPage } from "./main/factories/pages/MakeUsers"
import { MakeCourses } from "./main/factories/pages/MakeCourses"
import { MakeClasses } from "./main/factories/pages/MakeClasses"
import { MakeDashboard } from "./main/factories/pages/MakeDashboard"
import { MakeViewUser } from "./main/factories/pages/MakeViewUser"
import { MakeSubjectModules } from "./main/factories/pages/MakeSubjectModules"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<MakeDashboard />} />
          <Route path="/usuarios" element={makeUsersPage()} />
          <Route path="/usuarios/visualizar" element={MakeViewUser()} />
          <Route path="/materias" element={MakeCourses()} />
          <Route path="/materias/modulos" element={MakeSubjectModules()} />
          <Route path="/classes" element={MakeClasses()} />
        </Route>

        <Route path="/login" element={makeLogin()} />
        <Route path="/professor/notas" element={<GradesManagement />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/notas" element={<GradesView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
