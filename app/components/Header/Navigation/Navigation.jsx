'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { ActiveLink } from './ActiveLink'
import { BurgerIcon } from '../BurgerIcon/BurgerIcon'
import styles from './Navigation.module.scss'
import Link from 'next/link'

const navLinks = [
  { title: '/portfolio', label: 'Portfolio' },
  { title: '/about', label: 'About' },
  { title: '/contact', label: 'Contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button
        className="mobile-nav-toggle"
        onClick={toggleMenu}
      >
        <span className="sr-only">Menu</span>
        <BurgerIcon isOpen={isOpen} />
      </button>

      {/*       <button
        class="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded="false"
      >
        <span class="sr-only">Menu</span>
      </button>
       */}
      <nav className={styles.nav}>
        <ul className={clsx(styles.nav_list, { [styles.open]: isOpen })}>
          <Link className={styles.home} href="/">logo + Home</Link>
          {navLinks.map(({ title, label }) => (
            <li key={title}>
              <ActiveLink
                href={title}
                activeClassName={styles.active}
              >
                {label}
              </ActiveLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
