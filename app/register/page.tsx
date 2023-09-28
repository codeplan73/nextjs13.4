'use client'

import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z, ZodError } from 'zod'

const registrationSchema = z.object({
  name: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type RegistrationFormData = z.infer<typeof registrationSchema>

interface RegistrationFormProps {
  onSubmit: SubmitHandler<RegistrationFormData>
}

const RegistrationPage: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>()

  const handleFormSubmit: SubmitHandler<RegistrationFormData> = async (
    data
  ) => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) console.log(response)
      // Request failed
      else console.error('Registration failed')
    } catch (error) {
      console.error('An error occured', error)
    }
  }

  return (
    <div className="flex flex-col space-y-4 max-w-5xl items-center justify-center">
      <h2 className="text-2xl">Register as New User</h2>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col space-y-2">
          <label htmlFor="name">FullName</label>
          <input
            type="text"
            {...register('name')}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="name">Email</label>
          <input
            {...register('email')}
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="name">Password</label>
          <input
            type="password"
            {...register('password')}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div className="flex flex-col space-y-2">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default RegistrationPage
