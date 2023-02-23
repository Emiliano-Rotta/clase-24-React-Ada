import Button from "./Button"

const Footer = ({ categoriaSeis }) => {
  return (
    <footer>
      <h2>Soy footer</h2>
      <Button title="Pasar de categoria" categoriaSeis={categoriaSeis} />
    </footer>
  )
}

export default Footer