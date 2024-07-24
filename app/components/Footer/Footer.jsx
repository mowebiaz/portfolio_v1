import { FaGithub } from 'react-icons/fa6'
import { FaLinkedin } from "react-icons/fa";
import './Footer.scss'

export function Footer() {
  return <footer>
    <div className='footer_links'>
      <a href="https://github.com/mowebiaz" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/morgane-couvet" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </div>
    <p> © 2024 Morgane. Tous droits réservés.</p>
  </footer>
}