import { PrismaClient } from '@prisma/client'

import { hashPassword } from '../src/utils/password'

const prisma = new PrismaClient()

async function main() {
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@portfolio.com' },
    update: {},
    create: {
      email: 'admin@portfolio.com',
      name: 'Admin',
      password: hashPassword('cleber')
    }
  })

  const noteId = 'DELETEME'

  const note = await prisma.note.upsert({
    where: { id: noteId },
    update: {},
    create: {
      id: noteId,
      title: 'Título',
      content: 'Texto muito longo',
      userId: adminUser.id
    }
  })

  console.log({ adminUser, note })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)

    await prisma.$disconnect()

    process.exit(1)
  })
