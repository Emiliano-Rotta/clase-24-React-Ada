const Button = ({ title, categoriaSeis }) => {

console.log(categoriaSeis)
  
  return (
    <button className={categoriaSeis ? "boton-violeta" : "boton-amarillo"} > {/* este className esta en App.css */}
      {title}
    </button>
  )
}

export default Button
