import { z } from 'zod'

export const Step1Schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email Adress is required').email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
})

export const Step2Schema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().min(1, 'Email Adress is required').email('Invalid email address'),
})