import { merienda } from '../../styles/fonts'
import { ReactIcon } from '/public/icons/ReactIcon'
import { FaReact } from 'react-icons/fa6'
import { FaBeer } from 'react-icons/fa'
import './page.scss'
import Image from 'next/image'

import icon from '../../../public/icons/react_icon.svg'

export const metadata = {
  title: 'A propos',
}

export default function About() {
  return (
    <main id="about">
      {/* <Image src={icon} alt="asset" width={300} height={300}/>
       */}
      <div className="about_title">
        <div className="about_title_image">
          <Image
            className="profile_image"
            src="/images/bank-tree.webp"
            alt="kmkmk"
            fill={true}
            sizes='(100vw, 100vh)'
          />
        </div>
        <h1 className={merienda.className}>Qui suis-je ?</h1>
      </div>
      <article className="about_container">
        <p>
          Ancienne scientifique, je me suis formée à HTML et CSS il y a un
          certain nombre d’années. J&apos;ai pris plaisir à créer plusieurs
          sites web pour des journées scientifiques ou des projets plus
          personnels, ce qui m&apos;a motivée à approfondir mes compétences.
        </p>
      </article>

      <article className="about_container">
        <p>
          Ces dernières années, j&apos;ai mis à jour mes compétences avec les
          technologies (plus vraiment!) modernes comme Flexbox et Grid, en
          suivant des cours en ligne, notamment sur freeCodeCamp où j&apos;ai
          obtenu la certification &quot;Responsive Web Design&quot;. J&apos;ai
          commencé à appréhender le SCSS, le référencement (SEO) et les
          animations.
        </p>
      </article>

      <article className="about_container">
        <p>
          Souhaitant évoluer vers le domaine de la programmation, j&apos;ai
          décidé de me plonger dans Python. Le but: créer des outils basés sur
          l&apos;intelligence artificielle, particulièrement pour l&apos;analyse
          d&apos;images de microscopie. J&apos;ai appris à utiliser des
          librairies comme Pandas, NumPy, OpenCV, et scikit-image, ainsi que des
          outils d&apos;IA comme scikit-learn et Keras, tout en obtenant des
          certifications de DataCamp.
        </p>
      </article>

      <article className="about_container">
        <p>
          Tout ça en autodidacte: à l’époque Google était le meilleur des
          professeurs (et chatGPT n’existait pas!)
        </p>
      </article>

      <article className="about_container">
        <p>
          MAIS..., tous ces outils, basés sur des statistiques, ne me
          correspondaient pas. L&apos;aspect visuel et l&apos;UX design me
          manquaient. L&apos;idée avait fait son chemin et était tout simplement
          devenue une évidence… J&apos;ai décidé de me reconvertir dans le
          développement web, en suivant une formation
          d&apos;intégrateur/développeur web en parallèle de mon travail.
        </p>
      </article>

      <article className="about_container">
        <p>
          Aujourd&apos;hui, je me lance en freelance pour créer des sites web et
          des outils interactifs. Mon portfolio présente mes projets, à la fois
          ceux réalisés durant ma formation et mes initiatives personnelles. Mon
          but est de proposer des solutions web innovantes et efficaces, en
          combinant mes compétences techniques et ma passion pour le design.
        </p>
      </article>

      <article className="about_container">
        <p>
          En dehors du web, je partage ma vie entre Grenoble et la Haute-Savoie,
          j’ai un gros chien et je n’ai pas encore trouvé de meilleur moyen pour
          se reconnecter qu’une balade au milieu de la nature.
        </p>
      </article>

      <h3>
        Lets go for a <FaBeer />?
      </h3>
    </main>
  )
}
