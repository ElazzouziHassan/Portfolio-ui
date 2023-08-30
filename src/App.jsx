import './style.scss'
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Services from "./pages/services/Services"
import About from "./pages/about/About"
import Works from "./pages/works/Works"
import Resume from "./pages/resume/Resume"
import Contact from "./pages/contact/Contact"
import Profile from './pages/profile/Profile';
import Topbanner from './components/topbanner/Topbanner';

function App() {

  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Topbanner/>
        <Navbar />
        <Outlet/>
      </div>
    )
  }

  const router = createBrowserRouter([
    { path: '/', element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/profile', element: <Profile /> },
        { path: '/about', element: <About /> },
        { path: '/services', element: <Services/> },
        { path: '/works', element: <Works /> },
        { path: '/resume', element: <Resume /> },
        { path: '/contact', element: <Contact /> },
        
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
