import { useContext } from "react";
import UserContext from "../../context/UserContext";

function Button({ title }) {

  const usuario = useContext(UserContext)

  const handleClick = () => {
    usuario.setCategoriaSeis(true)
  }

    return (
        <button 
        className={usuario.categoriaSeis ? "boton-violeta" : "boton-amarillo"}
        onClick={handleClick}
        >
          {title}
       </button>
     );
   }
   
   export default Button;
