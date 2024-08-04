import { HomeHero } from './components/HomeHero/HomeHero'
import './page.scss'

export default function Home() {
  return (
    <>
      <main id="home">
        <HomeHero />
        <section className="content">
          <p>Bienvenue sur mon site.</p>
          <p>
            Développeur web freelance, passionnée par la création de sites et
            d&apos;applications web performants et intuitifs, je mets mon expertise
            au service de vos projets pour les mener au succès. Explorez mon
            portfolio pour découvrir mes réalisations et n&apos;hésitez pas à me
            contacter pour discuter de vos besoins.
          </p>
        </section>
      </main>
    </>
  )
}
