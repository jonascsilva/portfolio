import { prisma } from '$/lib/prisma'

type Props = { params: { id: string } }

const Page = async ({ params }: Props) => {
  const note = await prisma.note.findUnique({ where: { id: params.id } })

  return (
    <div>
      <h2>{params.id}</h2>
      <h2>{note!.title}</h2>
    </div>
  )
}

export { Page as default }
