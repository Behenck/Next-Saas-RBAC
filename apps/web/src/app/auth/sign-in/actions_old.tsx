'use server'

import { HTTPError } from 'ky'
import { z } from 'zod'

import { signInWithPassword } from '@/http/sign-in-with-password'

const SignInSchema = z.object({
  email: z
    .string()
    .email({ message: 'Please, provide a valid e-mail address.' }),
  password: z.string().min(1, { message: 'Please, provide your password.' }),
})

export async function signInWithEmailAndPassword(_: unknown, data: FormData) {
  const formData = Object.fromEntries(data)

  const result = SignInSchema.safeParse(formData)

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors
    return { success: false, message: null, errors }
  }

  const { email, password } = result.data

  try {
    const { token } = await signInWithPassword({
      email,
      password,
    })
  } catch (err) {
    if (err instanceof HTTPError) {
      const { message } = await err.response.json()

      return { success: false, message, errors: null }
    }

    console.error(err)
    return {
      success: false,
      message: 'Unexpected error, try again in a few minutes',
      errors: null,
    }
  }

  return { success: true, message: null, errors: null }
}
