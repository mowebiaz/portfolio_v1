import { merienda } from '../../styles/fonts'
import { SkillsContainer } from '../../components/SkillsContainer/SkillsContainer'
import './page.scss'

export const metadata = {
  title: 'Compétences',
  description:
    'Découvrez mes compétences. Expertise en HTML, CSS, JavaScript, frameworks modernes, et bien plus pour créer des sites web performants et innovants.',
}

export default function Skills() {
  return (
    <main id="skillsPage">
      <h1 className={merienda.className}>Mes Compétences</h1>
      <SkillsContainer />
    </main>
  )
}
