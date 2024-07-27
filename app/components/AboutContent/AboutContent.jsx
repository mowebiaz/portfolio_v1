'use client'

import { motion } from 'framer-motion'
import './AboutContent.scss'

const aboutContentVariants = {
  initial: { opacity: 0,},
  animate: { opacity: 1, transition: { duration: 0.5 }},
}

export function AboutContent() {
  return (
    <motion.div className="about_content" variants={aboutContentVariants} initial="initial" animate="animate">
      <motion.p >
        Ancienne scientifique, je me suis formée à HTML et CSS il y a un certain
        nombre d’années. J&apos;ai pris plaisir à créer plusieurs sites web pour
        des journées scientifiques ou des projets plus personnels, ce qui
        m&apos;a motivée à approfondir mes compétences.
      </motion.p>

      <motion.p >
        Ces dernières années, j&apos;ai mis à jour mes compétences avec les
        technologies (plus vraiment!) modernes comme Flexbox et Grid, en suivant
        des cours en ligne, notamment sur
        <a
          href="https://www.freecodecamp.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          freeCodeCamp
        </a>
        où j&apos;ai obtenu la certification &quot;Responsive Web Design&quot;.
        J&apos;ai commencé à appréhender le SCSS, le référencement (SEO) et les
        animations.
      </motion.p>

      <motion.p >
        Tout ça en autodidacte: à l’époque Google était le meilleur des
        professeurs (et chatGPT n’existait pas!)
      </motion.p>

      <motion.p >
        Souhaitant évoluer vers le domaine de la programmation, j&apos;ai décidé
        de me plonger dans Python. Le but: créer des outils basés sur
        l&apos;intelligence artificielle, particulièrement pour l&apos;analyse
        d&apos;images de microscopie. J&apos;ai appris à utiliser des librairies
        comme Pandas, NumPy, OpenCV, et scikit-image, ainsi que des outils
        d&apos;IA comme scikit-learn et Keras, tout en obtenant des
        certifications de
        <a
          href="https://www.datacamp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          DataCamp
        </a>
        .
      </motion.p>

      <motion.p >
        MAIS..., tous ces outils, basés sur des statistiques, ne me
        correspondaient pas. L&apos;aspect visuel et l&apos;UX design me
        manquaient. L&apos;idée avait fait son chemin et était tout simplement
        devenue une évidence… J&apos;ai décidé de me reconvertir dans le
        développement web, en suivant une formation
        d&apos;intégrateur/développeur web chez
        <a
          href="https://openclassrooms.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenClassrooms
        </a>
        en parallèle de mon travail.
      </motion.p>

      <motion.p >
        Aujourd&apos;hui, je me lance en freelance pour créer des sites web et
        des outils interactifs. Mon but est de proposer des solutions web
        innovantes et efficaces, en combinant mes compétences techniques et ma
        passion pour le design.
      </motion.p>

      <motion.p >
        En dehors du web, je partage ma vie entre Grenoble et la Haute-Savoie,
        j’ai un gros chien et je n’ai pas encore trouvé de meilleur moyen pour
        se reconnecter qu’une balade au milieu de la nature.
      </motion.p>
    </motion.div>
  )
}
