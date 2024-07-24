import { CardsContainer } from '../../components/CardsContainer/CardsContainer'
import { merienda } from '../../styles/fonts'
import './page.scss'

export const metadata = {
  title: 'Portfolio',
  description: "Explorez mes réalisations en tant que développeur web freelance. Des projets innovants et sur mesure, mettant en avant mes compétences en développement."
}

export default function Portfolio() {
  return (
    <main id="portfolio">
      <h1 className={merienda.className}>Mes projets</h1>
      <CardsContainer />
    </main>
  )
}
