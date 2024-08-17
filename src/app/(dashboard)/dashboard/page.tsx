import { auth } from '$/lib/auth'
import { prisma } from '$/lib/prisma'

import classes from './page.module.scss'

const Page = async () => {
  const session = await auth()

  const notes = await prisma.note.findMany()

  return (
    <>
      <h2 className={classes.heading}>
        Bem vindo <span>{session!.user?.name}</span>!
      </h2>
      <h3>Recentes</h3>
      <div>
        {notes.map(note => (
          <div key={note.id}>{note.title}</div>
        ))}
      </div>
    </>
  )
}

export { Page as default }
