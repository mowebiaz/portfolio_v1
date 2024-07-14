'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { ActiveLink } from './ActiveLink'
import { BurgerIcon } from '../BurgerIcon/BurgerIcon'
import { MdHome } from "react-icons/md";
import './Navigation.scss'

const navLinks = [
  { title: '/portfolio', label: 'Portfolio' },
  { title: '/about', label: 'About' },
  { title: '/contact', label: 'Contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const mobileNav = useRef(null)

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
      <nav>
        <ul className={`nav_list ${isOpen ? 'open' : ''}`}>
          <Link
            className="homeLink"
            href="/"
          >
            <MdHome /> Home
          </Link>
          {navLinks.map(({ title, label }) => (
            <li key={title}>
              <ActiveLink
                href={title}
                activeClassName="activeLink"
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
