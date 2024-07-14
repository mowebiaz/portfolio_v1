'use client'

import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import './FormContact.scss'

const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID
const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY

export function FormContact() {
  /* const { register, handleSubmit, formState, errors, setError } = useForm()
  const {isSubmitting, isSubmitted, isSubmitSuccessful,  } = formState*/
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const dialogRef = useRef(null)

  const closeDialog = () => {
    reset()
    dialogRef.current?.close()
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    setError(null)
    setSuccess(false)

    try {
      /*       const result = await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        data,
        'YOUR_PUBLIC_KEY'
      ) */
      const result = await emailjs.send(
        serviceID,
        templateID,
        {
          name: data.name,
          email: data.email,
          message: data.text,
        },
        publicKey
      )

      console.log(result)
      setSuccess(true)
      dialogRef.current?.showModal()
    } catch (error) {
      setError(error.text)
      dialogRef.current?.showModal()
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="formContact"
    >
      <div>
        <label htmlFor="name">Nom:</label>
        <input
          type="text"
          name="name"
          {...register('name', { required: 'Vous devez indiquer votre nom' })}
          autoComplete="name"
        />
        {errors.name && <p className="alert">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          {...register('email', {
            required: 'Vous devez indiquer une adresse email',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "L'email n'est pas valide",
            },
          })}
          autoComplete="email"
        />
        {errors.email && <p className="alert">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="text">Message:</label>
        <textarea
          name="text"
          {...register('text', { required: 'Vous devez indiquer un message' })}
        />
        {errors.text && <p className="alert">{errors.text.message}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Loader' : 'Envoyer'}
      </button>

      <dialog
        ref={dialogRef}
        className="formContact_dialog"
      >
        {error && <p className="errorMsg">Erreur: {error}</p>}
        {success && <p className="successMsg">Message envoyé avec succès!</p>}
        <button onClick={closeDialog}>Fermer</button>
      </dialog>
    </form>
  )
}
