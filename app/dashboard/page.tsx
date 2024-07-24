import { auth, signOut } from '/lib/auth'
import { redirect } from 'next/navigation'

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

          await signOut()
        }}
      >
        <button type='submit'>Sign Out</button>
      </form>
    </div>
  )
}

export { Page as default }
