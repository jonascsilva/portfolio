import { useTheme } from 'next-themes'

import type { Theme } from '$/types/themes'

type SetTheme = (theme: Theme) => void

const useTypedTheme = () => {
  const { resolvedTheme, setTheme } = useTheme()

  return { currentTheme: resolvedTheme as Theme, setTheme: setTheme as SetTheme }
}

export { useTypedTheme as useTheme }
