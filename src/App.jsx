import './style.scss'
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

  const router = createBrowserRouter([
    { path: '/', element: <Layout />,
      children: [
        { path: '/', element: <Home/> },
      ]
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
