import prisma from '/lib/prisma'

import { ThemeButton } from '@/_/ThemeButton'

import classes from './page.module.scss'

const Page = async () => {
  const rows = await prisma.testTable.findMany()

  return (
    <main className={classes.main}>
      <ThemeButton />
      <h1 className={classes.heading}>Study</h1>
      <h2>Themes:</h2>
      <h2>Biology</h2>
      <h2>Physics</h2>
      <h2>Math</h2>
      {rows.map(row => (
        <div key={row.id}>{row.id}</div>
      ))}
    </main>
  )
}

export { Page as default }
