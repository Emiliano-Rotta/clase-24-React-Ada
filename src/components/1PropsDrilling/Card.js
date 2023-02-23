import Button from './Button'
import "./Card.css"

const Card = ({ categoriaSeis }) => {
  return (
    <article>
      <h3>PRODUCTOS DISTINTOS</h3>
      <Button title="comprar" categoriaSeis={categoriaSeis} />
    </article>
  )
}

export default Card
