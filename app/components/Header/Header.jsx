import { NavDesktop } from './Navigation/NavDesktop/NavDesktop'
import { NavMobile } from './Navigation/NavMobile/NavMobile'

export function Header() {
  return (
    <header>
      <NavDesktop />
        <NavMobile />
    </header>
  )
}
