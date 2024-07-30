'use client'

import { MdDarkMode, MdLightMode } from 'react-icons/md'

import { useIsMounted } from '$/hooks/useIsMounted'
import { useTheme } from '$/hooks/useTheme'
import { getNextTheme } from '$/utils/themes'

import classes from './index.module.scss'

const ThemeButton = () => {
  const { currentTheme, setTheme } = useTheme()
  const isMounted = useIsMounted()

  const handleClick = () => {
    const nextTheme = getNextTheme(currentTheme)

    setTheme(nextTheme)
  }

  return (
    <button
      disabled={!isMounted}
      onClick={handleClick}
      className={classes.button}
      aria-label='Change theme'
    >
      {isMounted && currentTheme === 'dark' && <MdLightMode size='100%' />}
      {isMounted && currentTheme === 'light' && <MdDarkMode size='100%' />}
    </button>
  )
}

export { ThemeButton }
