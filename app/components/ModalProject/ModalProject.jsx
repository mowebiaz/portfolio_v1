
import { forwardRef } from 'react'
import Image from 'next/image'
import { merienda } from '../../styles/fonts'
import { FaLink } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
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
            <h2 className={merienda.className}>{content?.name}</h2>
            <div className="links">
              {content.github ? (
                <a
                  href={content.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Lien vers le dépôt GitHub"
                  title="dépôt GitHub"
                  role="link"
                >
                  <FaGithub />
                </a>
              ) : null}
              {content.href ? (
                <a
                  href={content.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Lien vers le site web"
                  title="Site web"
                  role="link"
                >
                  <FaLink />
                </a>
              ) : null}
            </div>
          </div>
          <div className="context">
            <h3>Context: </h3>
            <p>{content.context}</p>
          </div>
          <div className="works">
            <h3>Tâches réalisées: </h3>
            <ul className="works_list">
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
