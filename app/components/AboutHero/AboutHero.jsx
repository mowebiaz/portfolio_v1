import Image from 'next/image'
import { merienda } from '../../styles/fonts'
import './AboutHero.scss'

export function AboutHero() {
  return(
    <div className="about_hero">
    <div className="about_hero_image">
      <Image
        className="profile_image"
        src="/images/morgane-couvet.webp"
        alt="Morgane Couvet"
        priority
        fill={true}
        sizes="30vw"
      />
    </div>
    <h1 className={merienda.className}>Qui suis-je ?</h1>
  </div>
  )
}