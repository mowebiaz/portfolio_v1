'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaPlus } from 'react-icons/fa6'
import { cardsVariants } from '../CardsContainer/CardsContainer'
import './Card.scss'


export function Card({ project, setSelectedProject }) {
  return (
    <>
      <motion.article className="card" variants={cardsVariants}>
        <div className="card_top">
          <Image
            src={project.image}
            alt={project.name}
            fill={true}
          />
          <div className="card_icon">
            <div className="card_icon_content">
              <button onClick={() => setSelectedProject(project)}>
                <FaPlus />
              </button>
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
      </motion.article>
    </>
  )
}
