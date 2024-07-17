import { forwardRef } from 'react'
import Image from 'next/image'
import './ModalProject.scss'

export const ModalProject = forwardRef(function ModalProject(
  { content, onCloseModal },
  ref
) {
  return (
    <dialog
      className="dialogProject"
      ref={ref}
    >
      {content && (
        <div className="dialogProject_content">
          <div className="title">
            <div className="title_image">
              <Image
                src={content.image}
                alt={content.name}
                width={600}
                height={400}
              />
            </div>
            <h2>{content?.name}</h2>
          </div>
          <div className="links">
            <a
              href={content.github}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            {content.href ? <a href={content.href}>website</a> : null}
          </div>
          <div className="context">
            <h3>Context: </h3>
            <p>{content.context}</p>
          </div>
          <div className="works">
            <h3>Tâches réalisées: </h3>
            <ul>
              {content.works.map((work) => (
                <li key={work}>{work}</li>
              ))}
            </ul>
          </div>

          <button
            className="closeButton"
            onClick={onCloseModal}
          >
            Close
          </button>
        </div>
      )}
    </dialog>
  )
})
