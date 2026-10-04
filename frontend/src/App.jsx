import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./MainLayout"
import Pending from "./pages/Pending"
import Finished from "./pages/Finished"
import Inputs from "./pages/Inputs"
import TotoPending from "./pages/TotoPending"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Pending />} />
          <Route path="/todo-finished" element={<Finished />} />
          <Route path="/todo-pending" element={<TotoPending />} />
        </Route>  
      </Routes>
    </BrowserRouter>
  )
}

export default App
