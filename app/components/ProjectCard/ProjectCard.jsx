'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaPlus } from 'react-icons/fa6'
import { projectsCardsVariants } from '../ProjectsCardsContainer/ProjectsCardsContainer'
import './ProjectCard.scss'


export function ProjectCard({ project, setSelectedProject }) {
  return (
    <>
      <motion.article className="projectCard" variants={projectsCardsVariants}>
        <div className="projectCard_top">
          <Image
            src={project.image}
            alt={project.name}
            fill={true}
            sizes="(100vw, 100vh)"
          />
          <div className="projectCard_icon">
            <div className="projectCard_icon_content">
              <button onClick={() => setSelectedProject(project)}>
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
        <div className="projectCard_content">
          <h3>{project.name}</h3>
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
