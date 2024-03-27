import {BrowserRouter, Route, Routes} from "react-router-dom"
import Userrouter from "./Router/Userrouter"
import Adminrouter from "./Router/Adminrouter"

function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/*" element={<Userrouter />} />
    <Route path="/admin/*" element={<Adminrouter />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App
