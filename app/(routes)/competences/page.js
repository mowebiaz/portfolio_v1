import { merienda } from '../../styles/fonts'
import { SkillsSection } from '../../components/SkillsSection/SkillsSection'
import {  FaVuejs, FaGithub, FaDocker } from 'react-icons/fa';
import { FaHtml5, FaReact } from "react-icons/fa6";
import { SiSass, SiRedux, SiNotion } from "react-icons/si";
import './page.scss'

export const metadata = {
  title: 'A propos',
  description: "Découvrez mes compétences. Expertise en HTML, CSS, JavaScript, frameworks modernes, et bien plus pour créer des sites web performants et innovants."
}

const skillsData = [
  {
    title: 'Mes Technos',
    skills: [
      { icon: FaHtml5, name: 'HTML' },
      { icon: FaHtml5, name: 'HTML' },
      { icon: SiSass, name: 'Sass' },
      { icon: FaReact, name: 'React' },
      { icon: SiRedux, name: 'Redux' },


    ],
  },
  {
    title: 'Mes Outils',
    skills: [
      { icon: FaGithub, name: 'Git' },
      { icon: SiNotion, name: 'Notion' },
    ],
  },
  {
    title: 'Mais aussi',
    skills: [
      { icon: FaGithub, name: 'Git' },
      { icon: FaDocker, name: 'Docker' },
      // Ajoute d'autres outils ici
    ],
  },
];

export default function Skills() {
  return (
    <main id="skillsPage">
      <h1 className={merienda.className}>Mes Compétences</h1>
      {skillsData.map((section, index) => (
        <SkillsSection key={index} title={section.title} skills={section.skills} />
      ))}

    </main>
  )}