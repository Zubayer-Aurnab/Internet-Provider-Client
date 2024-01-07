import { Outlet } from "react-router-dom"
import NavBar from "./Pages/Shared/NavBar/NavBar"



function App() {

  return (
    <>
      <NavBar>
        <Outlet />
      </NavBar>
    </>
  )
}

export default App
