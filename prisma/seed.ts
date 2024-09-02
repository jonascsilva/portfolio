import { PrismaClient } from '@prisma/client'

import { hashPassword } from '../src/utils/password'
import { generateId } from '../src/utils/seed'

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

  const notes = [
    { title: 'Revolução Francesa', subject: 'História' },
    { title: 'Guerra Fria', subject: 'História' },
    { title: 'Vitaminas', subject: 'Biologia' }
  ]

  for (const note of notes) {
    const noteId = generateId()

    await prisma.note.upsert({
      where: { id: noteId },
      update: {},
      create: {
        id: noteId,
        title: note.title,
        subject: note.subject,
        content: '',
        userId: adminUser.id
      }
    })
  }

  console.log({ adminUser, notes })
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
