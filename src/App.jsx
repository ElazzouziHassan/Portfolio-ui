import MenuBlinder from "./components/decorateurs/MenuBlinder"
import Links from "./components/links/Links"
import Navbar from "./components/navbar/Navbar"


function App() {

  return (
    <div className="App">
      <Navbar />
      <hr />
      <MenuBlinder />
      <Links/>
      
    </div>
  )
}

export default App
