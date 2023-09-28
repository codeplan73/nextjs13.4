import { z, ZodError } from 'zod'

export const schema = z.object({
  name: z.string().min(3, 'Name is too short'),
  email: z.string().email('Invalid email format').min(3, 'Email is too short'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})
