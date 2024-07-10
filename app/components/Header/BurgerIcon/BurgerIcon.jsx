
import clsx from 'clsx'
import styles from './BurgerIcon.module.scss'

export function BurgerIcon({ isOpen }) {
  return (
    <svg
      className={clsx(styles.burger, { [styles.open]: isOpen })}
      width="250"
      viewBox="0 0 100 100"
    >
      <rect
        className={styles.rectBottom}
        width="80"
        height="10"
        x="10"
        y="65"
        rx="5"
      />
      <rect
        className={styles.rectMiddle}
        width="80"
        height="10"
        x="10"
        y="45"
        rx="5"
      />
      <rect
        className={styles.rectTop}
        width="80"
        height="10"
        x="10"
        y="25"
        rx="5"
      />
    </svg>
  )
}
