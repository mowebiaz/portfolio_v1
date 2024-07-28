import { FaGithub } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa'
import './Footer.scss'

export function Footer() {
  return (
    <footer>
      <div className="footer_links">
        <a
          href="https://github.com/mowebiaz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label='Lien vers le profil Github'
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/morgane-couvet"
          target="_blank"
          rel="noopener noreferrer"
          aria-label='Lien vers le profil LinkedIn'
        >
          <FaLinkedin />
        </a>
      </div>
      <p> © 2024 Morgane Couvet. Tous droits réservés.</p>
    </footer>
  )
}
