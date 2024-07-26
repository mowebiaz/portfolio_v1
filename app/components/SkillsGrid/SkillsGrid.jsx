import { SkillCard } from '../SkillCard/SkillCard'
import "./SkillsGrid.scss"
export function SkillsGrid({ skills }) {
  return (
    <div className="skills_grid">
      {skills.map((skill, index) => (
        <SkillCard
          key={index}
          Icon={skill.icon}
          name={skill.name}
        />
      ))}
    </div>
  )
}
