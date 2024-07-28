'use client'

import Link from 'next/link'
import Image from 'next/image'
import { delay, easeIn, motion } from 'framer-motion'
import { merienda } from '../../styles/fonts'
import './HomeHero.scss'

const titleVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.05, easeIn },
    delay: 1,
  },
}

const buttonsVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.05, easeIn, duration: 1 },
  },
}

export const HomeHero = () => {
  return (
    <section className="home_hero">
      <div className="cta">
        <div className="cta_content">
          <h1 className={merienda.className}>Morgane Couvet</h1>
          <motion.h2
            className={merienda.className}
            variants={titleVariants}
            initial="initial"
            animate="animate"
          >
            {'Développeur Web'.split('').map((char, index) => (
              <motion.span
                key={index}
                className="letter"
                variants={titleVariants}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
        </div>
        <motion.div
          className="cta_buttons"
          variants={buttonsVariants}
          initial="initial"
          animate="animate"
        >
          <Link
            href="/contact"
            className="cta_buttons_contact"
          >
            Contact
          </Link>
          <Link
            href="/portfolio"
            className="cta_buttons_portfolio"
          >
            Portfolio
          </Link>
        </motion.div>
      </div>
      <div className="image">
        <Image
          src="/images/home_image.webp"
          alt="Morgane Couvet"
          priority
          fill={true}
          sizes="(100vw, 100vh)"
        />
      </div>
    </section>
  )
}
