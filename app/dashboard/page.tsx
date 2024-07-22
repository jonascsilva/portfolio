import { auth, signOut } from '/lib/auth'

const Page = async () => {
  const session = await auth()

  console.log(session)

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
