import { Role } from '@saas/auth'

import { api } from './api-client'

interface createInviteRequest {
  org: string
  email: string
  role: Role
}
type createInviteResponse = void

export async function createInvite({
  org,
  email,
  role,
}: createInviteRequest): Promise<createInviteResponse> {
  await api
    .post(`organizations/${org}/invites`, {
      json: {
        email,
        role,
      },
    })
    .json<createInviteResponse>()
}
