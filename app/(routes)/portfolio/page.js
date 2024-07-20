import { CardsContainer } from '../../components/CardsContainer/CardsContainer'
import { merienda } from '../../styles/fonts'
import './page.scss'

export const metadata = {
  title: 'Portfolio',
}

export default function Portfolio() {
  return (
    <main id="portfolio">
      <h1 className={merienda.className}>Mes projets</h1>
      <CardsContainer />
    </main>
  )
}
