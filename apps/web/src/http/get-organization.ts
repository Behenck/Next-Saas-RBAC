import { api } from './api-client'

interface getOrganizationResponse {
  organization: {
    slug: string
    id: string
    name: string
    domain: string
    shouldAttachUsersByDomain: boolean
    createdAt: string
    updatedAt: string
    ownerId: string
    avatarUrl: string | null
  }
}

export async function getOrganization(org: string) {
  const result = await api
    .get(`organization/${org}`)
    .json<getOrganizationResponse>()

  return result
}
