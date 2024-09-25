import { Role } from '@saas/auth'

import { api } from './api-client'

interface getMembersResponse {
  members: {
    userId: string
    id: string
    role: Role
    name: string | null
    email: string
    avatarUrl: string | null
  }[]
}

export async function getMembers(orgSlug: string) {
  const result = await api
    .get(`organizations/${orgSlug}/members`, {
      next: {
        tags: [`${orgSlug}/members`],
      },
    })
    .json<getMembersResponse>()

  return result
}
