'use client'

import { SkillCard } from '../SkillCard/SkillCard'
import "./SkillsGrid.scss"

export function SkillsGrid({ skills }) {
  return (
    <div className="skills_grid">
      {skills.map((skill, index) => (
        <SkillCard
          key={index}
          SvgIcon={skill.SvgIcon}
          name={skill.name}
        />
      ))}
    </div>
  )
}
