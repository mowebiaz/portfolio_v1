import { AboutHero } from '../../components/AboutHero/AboutHero'
import { AboutContent } from '../../components/AboutContent/AboutContent'
import './page.scss'

export const metadata = {
  title: 'A propos',
  description:
    'Je suis Morgane Couvet, développeur web freelance. Découvrez mon parcours et ma passion pour le développement web.',
}

export default function About() {
  return (
    <main id="about">
      <AboutHero />
      <AboutContent />
    </main>
  )
}
