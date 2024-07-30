import { PrismaClient } from '@prisma/client'

import { hashPassword } from '$/utils/password'

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

  console.log({ adminUser })
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
