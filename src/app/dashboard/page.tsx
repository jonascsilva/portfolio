import { redirect } from 'next/navigation'

import { auth, signOut } from '$/lib/auth'

const Page = async () => {
  const session = await auth()

  if (!session) {
    redirect('/api/auth/signin')
  }

  return (
    <div>
      Dashboard
      <form
        action={async () => {
          'use server'

          await signOut({ redirectTo: '/' })
        }}
      >
        <button type='submit'>Sign Out</button>
      </form>
    </div>
  )
}

export { Page as default }
