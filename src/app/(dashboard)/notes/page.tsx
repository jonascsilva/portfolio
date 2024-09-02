import { prisma } from '$/lib/prisma'

import { Client } from './client'

const Page = async () => {
  const notes = await prisma.note.findMany({
    orderBy: {
      updatedAt: 'desc'
    }
  })

  const rowsData = notes.map(note => {
    const { id, title, updatedAt } = note

    return { id, title, updatedAt }
  })

  return (
    <>
      <h2>Anotações</h2>
      <Client rowsData={rowsData} />
    </>
  )
}

export { Page as default }
