import './SkillCard.scss'

export function SkillCard({ Icon, name }) {
  return (
    <article className="skillCard">
      <div className='skillCard_icon'>
      <Icon className={`icon_${name}`}/>
      </div>
      <p className="skillCard_name">{name}</p>
    </article>
  )
}

