import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

import MenuBlinder from "./components/decorateurs/MenuBlinder"
import Navbar from "./components/navbar/Navbar"


function App() {

  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <hr />
        <MenuBlinder />
        {/* <Outlet/> */}
      </div>
    )
  }

  return (
    <div className="App">
      <Navbar />
      
      
    </div>
  )
}

export default App
