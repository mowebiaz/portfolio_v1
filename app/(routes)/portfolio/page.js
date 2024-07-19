import { CardsContainer } from '../../components/CardsContainer/CardsContainer'
import './page.scss'

export const metadata = {
  title: 'Portfolio',
}

export default function Portfolio() {
  return (
    <main id="portfolio">
      <h1>Portfolio</h1>
      <CardsContainer />
    </main>
  )
}
