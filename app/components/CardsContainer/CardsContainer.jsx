'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '../Card/Card'
import { ModalProject } from '../ModalProject/ModalProject'
import { projectsList } from '../../lib/projectsList'
import './CardsContainer.scss'

export const cardsVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.05 } },
}

export function CardsContainer() {
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
      <motion.div className="cards" variants={cardsVariants} initial="initial" animate="animate">
        {projectsList.map((project) => (
          <Card
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
