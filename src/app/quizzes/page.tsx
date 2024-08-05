import { redirect } from 'next/navigation'

import { DashboardShell } from '$/cmps/DashboardShell'
import { auth } from '$/lib/auth'

const Page = async () => {
  const session = await auth()

  if (!session) {
    redirect('/api/auth/signin')
  }

  return (
    <DashboardShell>
      <h2>Quizzes</h2>
    </DashboardShell>
  )
}

export { Page as default }
