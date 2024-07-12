import { forwardRef } from 'react'
import './ModalProject.scss'

export const ModalProject = forwardRef(function ModalProject(
  { modalContent, onCloseModal },
  ref
) {
  return (
    <dialog
      className="dialogProject"
      ref={ref}
    >
      <h2>hkhkjhkhkkjh</h2>
      {modalContent?.context}
      <button
        className="closeButton"
        onClick={onCloseModal}
      >
        Close
      </button>
    </dialog>
  )
})
