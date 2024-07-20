import { ActiveLink } from '../ActiveLink'
import { Logo } from '../../Logo/Logo'
import { navLinkList } from '../navLinkList'
import './NavDesktop.scss'

export function NavDesktop() {
  return (
    <div className="desktop">
      <Logo />
      <nav className="desktop_nav">
        <ul className="desktop_nav_list">
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
    </div>
  )
}
