'use client'

import { useState, useRef } from 'react'
import { useClickAway } from 'react-use'
import { motion, AnimatePresence } from 'framer-motion'
import { ActiveLink } from '../ActiveLink'
import { BurgerIcon } from '../../BurgerIcon/BurgerIcon'
import { mobileLinkList } from '../navLinkList'
import './NavMobile.scss'

const navMobileVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.07 } },
  exit: {
    x: '100%',
    opacity: 0,
  },
}

export function NavMobile() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

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
        aria-label="Menu"
        aria-controls="navigation"
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        <span className="sr-only">Menu</span>
        <BurgerIcon isOpen={isOpen} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="navigation"
            className="mobile_nav"
            variants={navMobileVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <ul className="mobile_nav_list">
              {mobileLinkList.map(({ title, label }) => (
                <motion.li
                  key={title}
                  variants={navMobileVariants}
                  onClick={toggleMenu}
                >
                  <ActiveLink
                    href={title}
                    activeClassName="activeLink"
                  >
                    {label}
                  </ActiveLink>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}
