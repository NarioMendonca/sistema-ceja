
import { AppProvider } from "./presentation/context/AppProvider"
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./presentation/Routes"

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
