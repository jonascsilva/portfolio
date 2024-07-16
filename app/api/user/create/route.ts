import { prismaAdapter } from '/lib/auth'
import { hashPassword } from '/utils/password'

const GET = async () => {
  try {
    const passwordHash = hashPassword('cleber')

    const user = await prismaAdapter.createUser?.({
      id: "",
      password: passwordHash,
      email: 'admin@portfolio.com',
      emailVerified: new Date()
    })

    return Response.json({ user })
  } catch (error) {
    return Response.json({ error })
  }
}

export { GET }
