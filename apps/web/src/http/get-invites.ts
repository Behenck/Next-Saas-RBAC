import { Role } from '@saas/auth'

import { api } from './api-client'

interface getInvitesResponse {
  invites: {
    id: string
    email: string
    role: Role
    createdAt: string
    author: {
      id: string
      name: string | null
      avatarUrl: string | null
    } | null
    organization: {
      name: string
    }
  }[]
}

export async function getInvites(orgSlug: string) {
  const result = await api
    .get(`organizations/${orgSlug}/invites`, {
      next: {
        tags: [`${orgSlug}/invites`],
      },
    })
    .json<getInvitesResponse>()

  return result
}
