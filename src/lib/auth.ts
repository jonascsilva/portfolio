import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { prisma } from '$/lib/prisma'
import { signInSchema } from '$/lib/zod'
import { getUser } from '$/utils/db'
import { hashPassword } from '$/utils/password'

const prismaAdapter = PrismaAdapter(prisma)

const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: prismaAdapter,
  logger: {
    error: error => {
      console.error(error)
    },
    warn: code => {
      console.warn(code)
    },
    debug: (message, metadata) => {
      console.debug(message, metadata)
    }
  },
  session: { strategy: 'jwt' },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials) {
        try {
          const { email, password } = await signInSchema.parseAsync(credentials)

          const pwHash = hashPassword(password)

          const user = await getUser(email, pwHash)

          if (!user) {
            throw new Error('User not found.')
          }

          return user
        } catch (error) {
          // if (error instanceof ZodError) {

          console.log(error)

          return null
        }
      }
    })
  ]
})

export { prismaAdapter, handlers, signIn, signOut, auth }
