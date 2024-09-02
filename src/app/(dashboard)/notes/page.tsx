import { Table } from '$/cmps/Table'
import { prisma } from '$/lib/prisma'

const Page = async () => {
  const notes = await prisma.note.findMany({
    orderBy: {
      updatedAt: 'desc'
    }
  })

  const rows = notes.map(note => {
    const { id, title, updatedAt } = note

    return { id, title, updatedAt }
  })

  return (
    <>
      <h2>Anotações</h2>
      <Table
        headers={['Nome', 'Assunto', 'Última modificação', '', '']}
        rows={rows}
        actions={['edit', 'share']}
      ></Table>
    </>
  )
}

export { Page as default }
