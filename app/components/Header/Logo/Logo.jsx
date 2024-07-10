import Link from 'next/link'
import "./Logo.scss"

export function Logo() {
  return (
    <Link
      className="logo"
      href="/"
    >
      <svg viewBox="0 0 75 75">
        <path d="M 2.0711 37 L 16.2132 22.8579 L 16.2132 51.1421 L 2.0711 37 Z" />
        <path d="M 19.7487 54.6777 L 19.7487 19.3223 L 37.4264 37 L 55.1041 19.3223 L 55.1041 54.6777 L 37.4264 72.3553 L 19.7487 54.6777 Z" />
        <path d="M 58.6396 22.8579 L 72.7817 37 L 58.6396 51.1421 L 58.6396 22.8579 Z " />
        <path d="M 23.2843 15.7868 L 37.4264 1.6447 L 51.5685 15.7868 L 37.4264 29.9289 L 23.2843 15.7868 Z" />
      </svg>
    </Link>
  )
}
