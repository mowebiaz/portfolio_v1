import { merienda } from '../../styles/fonts'
import { SkillsSection } from '../../components/SkillsSection/SkillsSection'
import { FaGithub, FaGitAlt } from 'react-icons/fa'
import { FaHtml5, FaReact } from 'react-icons/fa6'
import { SiSass, SiNextdotjs, SiRedux, SiNotion } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io5'
import './page.scss'

export const metadata = {
  title: 'A propos',
  description:
    'Découvrez mes compétences. Expertise en HTML, CSS, JavaScript, frameworks modernes, et bien plus pour créer des sites web performants et innovants.',
}

const skillsData = [
  {
    title: 'Mes Technos',
    skills: [
      { icon: FaHtml5, name: 'HTML' },
      { icon: FaHtml5, name: 'CSS' },
      { icon: SiSass, name: 'Sass' },
      { icon: IoLogoJavascript, name: 'JavaScript' },
      { icon: FaReact, name: 'React' },
      { icon: SiNextdotjs, name: 'Next.js' },
      { icon: SiRedux, name: 'Redux' },
    ],
  },
  {
    title: 'Mes Outils',
    skills: [
      { icon: FaGitAlt, name: 'Git' },
      { icon: FaGithub, name: 'GitHub' },
      { icon: FaGithub, name: 'VSCode' },
      { icon: SiNotion, name: 'Notion' },
    ],
  },
  {
    title: 'Mais aussi...',
    skills: [
      { icon: FaGithub, name: 'Gestion de projets' },
    ],
  },
]

export default function Skills() {
  return (
    <main id="skillsPage">
      <h1 className={merienda.className}>Mes Compétences</h1>
      {skillsData.map((section, index) => (
        <SkillsSection
          key={index}
          title={section.title}
          skills={section.skills}
        />
      ))}
    </main>
  )
}
