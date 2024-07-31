import { ActiveLink } from '../ActiveLink'
import { Logo } from '../../Logo/Logo'
import { desktopLinkList } from '../navLinkList'
import { merienda } from '../../../../styles/fonts'
import './NavDesktop.scss'

export function NavDesktop() {
  return (
    <div className="desktop">
      <Logo />
      <nav className="desktop_nav" aria-label='Menu'>
        <ul className="desktop_nav_list">
          {desktopLinkList.map(({ title, label }) => (
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
