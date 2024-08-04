'use client'

import { motion } from 'framer-motion'
import { SkillCard } from '../SkillCard/SkillCard'
import "./SkillsGrid.scss"

export const gridVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.05 } },
}

export function SkillsGrid({ skills }) {
  return (
    <motion.div className="skills_grid" variants={gridVariants} initial="initial" animate="animate">
      {skills.map((skill, index) => (
        <SkillCard
          key={index}
          SvgIcon={skill.SvgIcon}
          name={skill.name}
        />
      ))}
    </motion.div>
  )
}
