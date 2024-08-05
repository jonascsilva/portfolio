import { redirect } from 'next/navigation'
import { PropsWithChildren } from 'react'

import { Sidebar } from '$/cmps/Sidebar'
import { auth } from '$/lib/auth'

import classes from './layout.module.scss'

const Layout = async ({ children }: PropsWithChildren) => {
  const session = await auth()

  if (!session) {
    redirect('/api/auth/signin')
  }

  return (
    <div className={classes.container}>
      <Sidebar />
      <main className={classes.main}>{children}</main>
    </div>
  )
}

export { Layout as default }
