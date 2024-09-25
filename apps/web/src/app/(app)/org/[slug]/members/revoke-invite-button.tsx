import { XOctagon } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { RevokeInviteAction } from './actions'

interface RevokeInviteButtonProps {
  inviteId: string
}

export function RevokeInviteButton({ inviteId }: RevokeInviteButtonProps) {
  return (
    <form action={RevokeInviteAction.bind(null, inviteId)}>
      <Button size="sm" variant="destructive">
        <XOctagon className="mr-2 size-4" />
        Revoke invite
      </Button>
    </form>
  )
}
