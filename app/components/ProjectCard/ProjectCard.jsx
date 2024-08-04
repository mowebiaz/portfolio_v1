'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaPlus } from 'react-icons/fa6'
import { projectsCardsVariants } from '../ProjectsCardsContainer/ProjectsCardsContainer'
import './ProjectCard.scss'

export function ProjectCard({ project, setSelectedProject }) {
  return (
    <>
      <motion.article
        className="projectCard"
        variants={projectsCardsVariants}
      >
        <div className="projectCard_top">
          <Image
            src={project.image}
            alt={project.name}
            priority
            fill={true}
            sizes="(max-width: 693px) 100vw, (max-width: 1013px) 50vw, 33vw"
          />
          <div className="projectCard_icon">
            <div className="projectCard_icon_content">
              <button
                onClick={() => setSelectedProject(project)}
                aria-label="Voir le projet"
              >
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
        <div className="projectCard_content">
          <h2>{project.name}</h2>
          <ul className="projectCard_content_tech">
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </motion.article>
    </>
  )
}
