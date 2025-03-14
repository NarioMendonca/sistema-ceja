import { BrowserRouter, Routes } from "react-router-dom"
import { AppProvider } from "./presentation/context/AppProvider"
import { PrivateRoutes, PublicRoutes } from "./presentation/Routes"

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <PrivateRoutes />
          <PublicRoutes />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
