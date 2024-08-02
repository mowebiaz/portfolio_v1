'use client'

import { SkillsSection } from '../SkillsSection/SkillsSection'
import { skillsList } from '../../lib/skillsList'
import './SkillsContainer.scss'


export function SkillsContainer() {
  return (
    <div className='skillsContainer' >
      {skillsList.map((section, index) => (
        <SkillsSection
          key={index}
          title={section.title}
          skills={section.skills}
        />
      ))}
    </div>
  )
}
