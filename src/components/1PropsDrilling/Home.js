import Card from './Card'
import "./Home.css"
const cards = [
  {
    title: "1",
  },
  {
    title: "2",
  },
  {
    title: "3",
  },
  {
    title: "4",
  },
  {
    title: "5",
  },

]

const Home = ({ categoriaSeis }) => {
  return (
    <div>
      <h1>Soy Home</h1>
      <section className='card'>
      {
        cards.map(card => (
          <Card 
            key={card.title} 
            title={card.title} 
            categoriaSeis={categoriaSeis}
            />
          ))}
      </section>
    </div>
  )
}

export default Home
