'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { merienda } from '../../styles/fonts'
import './HomeHero.scss'

const subTitlevariants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0,  transition: { staggerChildren: 0.3 } },
}

export const HomeHero = () => {
  return (
    <section className="home_hero">
      <div className='cta'>
        <h1 className={merienda.className}>Morgane Couvet</h1>
        <div className='links'>
        <Link href="/contact" className='links_contact'>Contact</Link>
        <Link href="/portfolio" className='links_portfolio'>Portfolio</Link>
        </div>
      </div>
      <motion.div className='description' variants={subTitlevariants} initial="initial" animate="animate">
        <motion.h2 key="web"className={merienda.className} variants={subTitlevariants}>Développeur Web</motion.h2>
        <motion.h2 key="front" className={merienda.className} variants={subTitlevariants}>Développeur Front-end</motion.h2>
        <motion.h2 key="react" className={merienda.className} variants={subTitlevariants}>Développeur React</motion.h2>
        <motion.h2 key="integrateur" className={merienda.className} variants={subTitlevariants}>Intégrateur</motion.h2>
      </motion.div>
    </section>
  )
}
