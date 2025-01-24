import { BrowserRouter, Routes, Route } from "react-router"
import { Dashboard } from "./presentation/pages/Dashboard/Dashboard"
import { GradesManagement } from "./presentation/pages/GradesManagement/GradesManagement"
import { Profile } from "./presentation/pages/Profile/Profile"
import { GradesView } from "./presentation/pages/GradesView/GradesView"
import { PageLayout } from "./presentation/layouts/PageLayout"
import { makeLogin } from "./main/factories/pages/make-login"
import { makeUsersPage } from "./main/factories/pages/make-users"
import { makeCourses } from "./main/factories/pages/make-courses"
import { makeClasses } from "./main/factories/pages/make-classes"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/usuarios" element={makeUsersPage()} />
          <Route path="/materias" element={makeCourses()} />
          <Route path="/classes" element={makeClasses()} />
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
