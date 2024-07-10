import { Logo } from "./Logo/Logo";
import { Navigation } from "./Navigation/Navigation";
import styles from "./Header.module.scss";

export function Header() {
  return <header className={styles.header}>
<Logo />
 <Navigation />
  </header>;
}