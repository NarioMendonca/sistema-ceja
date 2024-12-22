import { BrowserRouter, Routes, Route } from "react-router"
import { Dashboard } from "./presentation/pages/Dashboard/Dashboard"
import { Users } from "./presentation/pages/Users/Users"
import { Courses } from "./presentation/pages/Courses/Courses"
import { GradesManagement } from "./presentation/pages/GradesManagement/GradesManagement"
import { Login } from "./presentation/pages/Login/Login"
import { Profile } from "./presentation/pages/Profile/Profile"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />}>
        </Route>
        <Route path="/usuarios" element={<Users />} />
        <Route path="/materias" element={<Courses />} />
        <Route path="/notas" element={<GradesManagement />} />
        <Route path="/perfil" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
