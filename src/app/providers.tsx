'use client'

import { ThemeProvider } from 'next-themes'
import { PropsWithChildren } from 'react'

import { themes } from '$/consts/themes'

const Providers = ({ children }: PropsWithChildren) => (
  <ThemeProvider themes={themes}>{children}</ThemeProvider>
)

export { Providers }
