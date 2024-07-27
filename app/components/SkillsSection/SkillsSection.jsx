'use client'

import { SkillsGrid } from '../SkillsGrid/SkillsGrid'
import { merienda } from '../../styles/fonts'
import './SkillsSection.scss'


export function SkillsSection({ title, skills }) {
  return (
    <section className="skills">
      <h2 className={merienda.className}>{title}</h2>
      <SkillsGrid skills={skills} />
    </section>
  )
}
