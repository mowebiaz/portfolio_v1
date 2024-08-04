'use client'

import { motion } from 'framer-motion'
import { gridVariants } from '../SkillsGrid/SkillsGrid'
import './SkillCard.scss'

export function SkillCard({ SvgIcon, name }) {
  return (
    <motion.article
      className="skillCard"
      variants={gridVariants}
    >
      <div className={`skillCard_icon ${name.toLowerCase()}`}>
        <SvgIcon />
      </div>
      <p className="skillCard_name">{name}</p>
    </motion.article>
  )
}
