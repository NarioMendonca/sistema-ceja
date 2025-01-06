import { BrowserRouter, Routes, Route } from "react-router"
import { Dashboard } from "./presentation/pages/Dashboard/Dashboard"
import { Users } from "./presentation/pages/Users/Users"
import { Courses } from "./presentation/pages/Courses/Courses"
import { GradesManagement } from "./presentation/pages/GradesManagement/GradesManagement"
import { Login } from "./presentation/pages/Login/Login"
import { Profile } from "./presentation/pages/Profile/Profile"
import { GradesView } from "./presentation/pages/GradesView/GradesView"
import { PageLayout } from "./presentation/layouts/PageLayout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/usuarios" element={<Users />} />
          <Route path="/materias" element={<Courses />} />  
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/professor/notas" element={<GradesManagement />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/notas" element={<GradesView />} />

        

        

      </Routes>
    </BrowserRouter>
  )
}

export default App
