import { Logo } from './Logo/Logo'
import { Navigation } from './Navigation/Navigation'
import './Header.scss'

export function Header() {
  return (
    <header>
      <Logo />
      <Navigation />
    </header>
  )
}
