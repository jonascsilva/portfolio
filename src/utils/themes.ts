import { themes } from '$/consts/themes'
import type { Theme } from '$/types/themes'

const getNextTheme = (theme: Theme) => {
  const currentThemeIndex = themes.indexOf(theme)

  const nextThemeIndex = (currentThemeIndex + 1) % themes.length

  return themes[nextThemeIndex]
}

export { getNextTheme }
