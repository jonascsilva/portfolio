import { prisma } from '/lib/prisma'

export async function GET() {
  const newTestTable = await prisma.testTable.create({
    data: { intColumn: 45 }
  })

  return Response.json({ newTestTable })
}
