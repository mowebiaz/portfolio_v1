'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { merienda } from '../../styles/fonts'
import './HomeHero.scss'
import Image from 'next/image'

export const HomeHero = () => {
  return (
    <section className="home_hero">
      <div className="cta">
        <div className="cta_content">
          <h1 className={merienda.className}>Morgane Couvet</h1>
          <h2 className={merienda.className}>Développeur Web</h2>
        </div>
        <div className="cta_buttons">
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
        </div>
      </div>
      <div className="image">
        <Image
          src="/images/home_image.webp"
          alt="Morgane Couvet"
          fill={true}
          sizes="(100vw, 100vh)"
        />
      </div>
    </section>
  )
}
