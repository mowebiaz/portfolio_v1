'use client'

import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Loader } from '/public/icons/Loader'
import './FormContact.scss'

const formVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
}

export function FormContact() {
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const dialogRef = useRef(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    clearErrors,
  } = useForm({ mode: 'onBlur' })

  const closeDialog = () => {
    reset()
    clearErrors() 
    dialogRef.current?.close()
  }

   const onSubmit = async (data) => {
    setError(null)
    setSuccess(false)

    try {
      const response = await fetch('/api/sendemail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.text,
        }),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        setError(true);
      }

      dialogRef.current?.showModal();
    } catch (error) {
      setError(true);
      dialogRef.current?.showModal();
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="formContact"
      variants={formVariants}
      initial="initial"
      animate="animate"
    >
      <div>
        <label htmlFor="name">Nom:</label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="name"
          {...register('name', { required: 'Vous devez indiquer votre nom' })}
        />
        {errors.name && <p className="alert">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete='email'
          {...register('email', {
            required: 'Vous devez indiquer une adresse email',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "L'email n'est pas valide",
            },
          })}
        />
        {errors.email && <p className="alert">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="text">Message:</label>
        <textarea
          name="text"
          id="text"
          {...register('text', { required: 'Vous devez indiquer un message' })}
        />
        {errors.text && <p className="alert">{errors.text.message}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? <Loader /> : 'Envoyer'}
      </button>

      <dialog
        ref={dialogRef}
        className={
          success ? 'formContact_dialog success' : 'formContact_dialog error'
        }
      >
        {error && <p>Problème d&apos;envoi</p>}
        {success && <p>Message envoyé avec succès!</p>}
        <button type="button" onClick={closeDialog} aria-label="Fermer">Fermer</button>
      </dialog>
    </motion.form>
  )
}
