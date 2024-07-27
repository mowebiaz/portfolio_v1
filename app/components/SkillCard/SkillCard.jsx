'use client'

import './SkillCard.scss'


export function SkillCard({ SvgIcon, name }) {
  return (
    <article className="skillCard">
      <div className={`skillCard_icon ${name.toLowerCase()}`}>
        <SvgIcon />
      </div>
      <p className="skillCard_name">{name}</p>
    </article>
  )
}
