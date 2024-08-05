import { PropsWithChildren } from 'react'

import { Sidebar } from '$/cmps/Sidebar'

import classes from './index.module.scss'

const DashboardShell = ({ children }: PropsWithChildren) => {
  return (
    <div className={classes.container}>
      <Sidebar />
      <main className={classes.main}>{children}</main>
    </div>
  )
}

export { DashboardShell }
