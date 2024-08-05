import clsx from 'clsx'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'

import classes from './layout.module.scss'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'StudyNest'
}

const Layout = ({ children }: PropsWithChildren) => (
  <html lang='en' suppressHydrationWarning>
    <head />
    <body className={clsx(inter.className, classes.body)}>
      <Providers>{children}</Providers>
    </body>
  </html>
)

export { metadata, Layout as default }
