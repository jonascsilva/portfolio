import { Mock, afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { ThemeButton } from '@/_/ThemeButton'
import { useIsMounted } from '@/_/ThemeButton/useIsMounted'
import { getNextTheme } from '@/_/themes.utils'
import { useTheme } from '@/_/useTheme'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'

vi.mock('@/_/useTheme', () => ({
  useTheme: vi.fn()
}))

vi.mock('@/_/ThemeButton/useIsMounted', () => ({
  useIsMounted: vi.fn()
}))

vi.mock('@/_/themes.utils', () => ({
  getNextTheme: vi.fn()
}))

vi.mock('react-icons/md', () => ({
  MdDarkMode: () => <div data-testid='MdDarkMode'>DarkModeIcon</div>,
  MdLightMode: () => <div data-testid='MdLightMode'>LightModeIcon</div>
}))

const mockUseTheme = useTheme as Mock
const mockUseIsMounted = useIsMounted as Mock
const mockGetNextTheme = getNextTheme as Mock

describe('ThemeButton Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(cleanup)

  const setup = (currentTheme: 'dark' | 'light', isMounted: boolean) => {
    const setThemeMock = vi.fn()

    mockUseTheme.mockReturnValue({ currentTheme, setTheme: setThemeMock })
    mockUseIsMounted.mockReturnValue(isMounted)

    render(<ThemeButton />)

    return { setThemeMock }
  }

  it('renders with light mode icon when current theme is dark', () => {
    setup('dark', true)

    expect(screen.getByTestId('MdLightMode')).to.exist
    expect(screen.queryByTestId('MdDarkMode')).to.not.exist
  })

  it('renders with dark mode icon when current theme is light', () => {
    setup('light', true)

    expect(screen.getByTestId('MdDarkMode')).to.exist
    expect(screen.queryByTestId('MdLightMode')).to.not.exist
  })

  it('disables the button when the component is not mounted', () => {
    setup('dark', false)

    const button = screen.getByRole('button', { name: 'Change theme' }) as HTMLButtonElement

    expect(button.disabled).to.be.true
  })

  it('enables the button when the component is mounted', () => {
    setup('dark', true)

    const button = screen.getByRole('button', { name: 'Change theme' }) as HTMLButtonElement

    expect(button.disabled).to.be.false
  })

  it('changes theme on button click', () => {
    const { setThemeMock } = setup('dark', true)

    mockGetNextTheme.mockReturnValue('light')

    const button = screen.getByRole('button', { name: 'Change theme' })

    fireEvent.click(button)

    expect(mockGetNextTheme).toHaveBeenCalledWith('dark')
    expect(setThemeMock).toHaveBeenCalledWith('light')
  })
})
