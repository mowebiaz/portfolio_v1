'use client'

import { useState, useRef, useEffect } from 'react'
import { Card } from '../Card/Card'
import { ModalProject } from '../ModalProject/ModalProject'
import { projectsList } from '../../lib/projectsList'
import './CardsContainer.scss'


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
      <div className="cards">
        {projectsList.map((project) => (
          <Card
            key={project.id}
            project={project}
            setSelectedProject={setSelectedProject}
          />
        ))}
      </div>
      <ModalProject
        ref={dialogRef}
        content={selectedProject}
        onCloseModal={closeModal}
      />
      </>
  )
}
