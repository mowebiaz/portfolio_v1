'use client'

import Link from 'next/link'
import { useState, useRef } from 'react'
import { useClickAway } from 'react-use'
import { ActiveLink } from '../ActiveLink'
import { BurgerIcon } from '../../BurgerIcon/BurgerIcon'
import { navLinkList } from '../navLinkList'
import './NavMobile.scss'

export function NavMobile() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // useClickAway hook from React-Use library to detect when a user clicks outside the menu.
  // When this happens, it triggers a function that closes the menu by setting isOpen to false.

  useClickAway(ref, () => {
    setIsOpen(false)
  })

  return (
    <div
      className="mobile"
      ref={ref}
    >
      <button
        className="burger-button"
        onClick={toggleMenu}
        /*                 aria-controls="primary-navigation"
        aria-expanded="false" */
      >
        <span className="sr-only">Menu</span>
        <BurgerIcon isOpen={isOpen} />
      </button>
      {isOpen && (

      <nav className="mobile_nav">
        <ul className="mobile_nav_list">
          <Link
            className="homeLink"
            href="/"
          >
            Home
          </Link>
          {navLinkList.map(({ title, label }) => (
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
      )}
    </div>
  )
}
