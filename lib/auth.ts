import { signInSchema } from '/lib/zod'
import { getUser } from '/utils/db'
import { hashPassword } from '/utils/password'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { ZodError } from 'zod'

import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const prismaAdapter = PrismaAdapter(prisma)

declare module 'next-auth' {
  interface User {
    password: string
  }
}

declare module '@auth/core/adapters' {
  interface AdapterUser {
    password: string
  }
}

const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: prismaAdapter,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      authorize: async credentials => {
        try {
          console.log(credentials)

          const { email, password } = await signInSchema.parseAsync(credentials)

          const pwHash = hashPassword(password)

          console.log(pwHash)

          const user = await getUser(email, pwHash)

          console.log(user);

          /* if (!user) {
            throw new Error('User not found.')
          } */

          return user
        } catch (error) {
          // if (error instanceof ZodError) {

          console.log(error);

          return null
        }
      }
    })
  ]
})

export { prismaAdapter, handlers, signIn, signOut, auth }
