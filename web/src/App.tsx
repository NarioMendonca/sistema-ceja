import { BrowserRouter, Routes, Route } from "react-router"
import { GradesManagement } from "./presentation/pages/GradesManagement/GradesManagement"
import { Profile } from "./presentation/pages/Profile/Profile"
import { GradesView } from "./presentation/pages/GradesView/GradesView"
import { PageLayout } from "./presentation/layouts/PageLayout"
import { makeLogin } from "./main/factories/pages/make-login"
import { makeUsersPage } from "./main/factories/pages/MakeUsers"
import { makeCourses } from "./main/factories/pages/make-courses"
import { MakeClasses } from "./main/factories/pages/MakeClasses"
import { makeViewClass } from "./main/factories/pages/MakeViewClass"
import { MakeDashboard } from "./main/factories/pages/MakeDashboard"
import { MakeViewUser } from "./main/factories/pages/MakeViewUser"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<MakeDashboard />} />
          <Route path="/users" element={makeUsersPage()} />
          <Route path="/user/view" element={MakeViewUser()} />
          <Route path="/materias" element={makeCourses()} />
          <Route path="/classes" element={MakeClasses()} />
          <Route path="/classes/students" element={makeViewClass()} />
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
