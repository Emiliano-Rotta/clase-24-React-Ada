import './App.css';
import Nav from './components/1PropsDrilling/Nav'
import Home from './components/1PropsDrilling/Home'
import Footer from './components/1PropsDrilling/Footer'

function App() {

  const usuario = {
    nombre: "Emiliano", 
    apellido: "Rotta", 
    edad: 29, 
    categoriaSeis: true
  }


// si el usuario esta logeado y NO es CAT 6, quiero mostrar los botones amarillos
// si el usuario esta logeado y SI es CAT 6, quiero mostrar los botones violetas 

  return (
    <div className="App">
      <Nav />
      <Home categoriaSeis={usuario.categoriaSeis}/>
      <Footer categoriaSeis={usuario.categoriaSeis} />
    </div>
  );
}

export default App;
