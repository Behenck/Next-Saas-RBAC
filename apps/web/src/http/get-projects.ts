import { api } from './api-client'

interface getProjectsResponse {
  projects: {
    name: string
    id: string
    slug: string
    avatarUrl: string | null
    ownerId: string
    createdAt: string
    organizationId: string
    description: string
    owner: {
      name: string | null
      id: string
      avatarUrl: string | null
    }
  }[]
}

export async function getProjects(orgSlug: string) {
  const result = await api
    .get(`organizations/${orgSlug}/projects`)
    .json<getProjectsResponse>()

  return result
}
