import Card from './Card'
import "./Home.css"
const cards = [
  {
    title: "Card 1",
  },
  {
    title: "Card 2",
  },
  {
    title: "Card 3",
  },
  {
    title: "Card 4",
  },
  {
    title: "Card 5",
  },

]

const Home = ({  }) => {
  return (
    <div>
      <h1>Soy Home</h1>
      <section className='card'>
      {
        cards.map(card => (
          <Card 
            key={card.title} 
            title={card.title} 
            />
          ))}
      </section>
    </div>
  )
}

export default Home
