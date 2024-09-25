import { api } from './api-client'

interface signInWithEmailAndPasswordRequest {
  email: string
  password: string
}
interface signInWithEmailAndPasswordResponse {
  token: string
}

export async function signInWithPassword({
  email,
  password,
}: signInWithEmailAndPasswordRequest) {
  const result = await api
    .post('sessions/password', {
      json: {
        email,
        password,
      },
    })
    .json<signInWithEmailAndPasswordResponse>()

  return result
}
