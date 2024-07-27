'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import { ModalProject } from '../ModalProject/ModalProject'
import { projectsList } from '../../lib/projectsList'
import './ProjectsCardsContainer.scss'

export const projectsCardsVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.05 } },
}

export function ProjectsCardsContainer() {
  const [selectedProject, setSelectedProject] = useState(null)
  const dialogRef = useRef(null)

  const closeModal = () => {
    dialogRef.current?.close()
    setSelectedProject(null)
  }

  useEffect(() => {
    if (selectedProject) {
      dialogRef.current?.showModal()
    } /* else {
      dialogRef.current?.close()
      setSelectedProject(null)
    } */
  }, [selectedProject])

  // Close the dialog when the user clicks outside of it
  if (dialogRef.current) {
    dialogRef.current.addEventListener('click', (event) => {
      if (event.target === dialogRef.current) {
        closeModal()
      }
    })
  }

  return (
    <>
      <motion.div className="projects_cards" variants={projectsCardsVariants} initial="initial" animate="animate">
        {projectsList.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            setSelectedProject={setSelectedProject}
          />
        ))}
      </motion.div>
        <ModalProject
          ref={dialogRef}
          content={selectedProject}
          onCloseModal={closeModal}
        />
    </>
  )
}
