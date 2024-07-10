'use client'

import Image from 'next/image'
import './Card.scss'

export function Card({ project }) {
  const openDialog = () => {
    document.getElementById('dialogProject').showModal()
  }

  const closeDialog = () => {
    document.getElementById('dialogProject').close()
  }

  return (
    <>
      <div className="card">
        <div className="card_top">
          <Image
            src={project.image}
            alt={project.name}
            fill={true}
          />
          <div className="card_icon">
            <div className="card_icon_content">
              <button onClick={openDialog}>xxx</button>
            </div>
          </div>
        </div>
        <div className="card_content">
          <h3>{project.name}</h3>
          <ul className="card_content_tech">
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
      <dialog id="dialogProject">
        <button
          className="dialog_closeButton"
          onClick={closeDialog}
        >
          x
        </button>
        <div className="dialog_title">
          <h3>{project.name}</h3>
          <div>links</div>
        </div>
        <p>{project.context}</p>
        <ul className="dialog_works"></ul>
      </dialog>
    </>
  )
}
