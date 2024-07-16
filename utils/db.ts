import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getUser = async(email: string, hashedPassword: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    })

    if (user && user.password === hashedPassword) {
      return user
    }

    return null
  } catch (error) {
    console.error('Error fetching user from database:', error)
    return null
  }
}

export { getUser }