import './App.css';
import Nav from "./components/2Context/Nav"
import Home from "./components/2Context/Home"
import Footer from "./components/2Context/Footer"
import { useState } from 'react';
import UserContext from "./context/UserContext"


function App() {

  const [categoriaSeis, setCategoriaSeis] = useState(false)

   const handleChange = (e) => {
    setCategoriaSeis(e.target.checked)
  }

  const usuario = {
    nombre: "Emiliano",
    apellido: "Rotta",
    edad: 29,
    categoriaSeis: categoriaSeis,
    setCategoriaSeis: setCategoriaSeis
  }
  

 return (
    <div className="App">
      <UserContext.Provider value={usuario}>
        <Nav />
        <Home />
          <label>Convertirme en 6</label>
          <input 
            type="checkbox" 
            checked={categoriaSeis}
            onChange={handleChange}
          />
        <Footer />
      </UserContext.Provider>
  
    </div>
  );
}

export default App;