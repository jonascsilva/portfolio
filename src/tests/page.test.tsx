import { fireEvent, render, screen } from '@testing-library/react'

import { ThemeButton } from '$/cmps/ThemeButton'
import { useIsMounted } from '$/hooks/useIsMounted'
import { useTheme } from '$/hooks/useTheme'
import { getNextTheme } from '$/utils/themes'

jest.mock('$/hooks/useTheme', () => ({
  useTheme: jest.fn()
}))

jest.mock('$/hooks/useIsMounted', () => ({
  useIsMounted: jest.fn()
}))

jest.mock('$/utils/themes', () => ({
  getNextTheme: jest.fn()
}))

jest.mock('react-icons/md', () => ({
  MdDarkMode: () => <div data-testid='MdDarkMode'>DarkModeIcon</div>,
  MdLightMode: () => <div data-testid='MdLightMode'>LightModeIcon</div>
}))

const mockUseTheme = useTheme as jest.Mock
const mockUseIsMounted = useIsMounted as jest.Mock
const mockGetNextTheme = getNextTheme as jest.Mock

describe('ThemeButton Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const setup = (currentTheme: 'dark' | 'light', isMounted: boolean) => {
    const setThemeMock = jest.fn()

    mockUseTheme.mockReturnValue({ currentTheme, setTheme: setThemeMock })
    mockUseIsMounted.mockReturnValue(isMounted)

    render(<ThemeButton />)

    return { setThemeMock }
  }

  it('renders with light mode icon when current theme is dark', () => {
    setup('dark', true)

    expect(screen.getByTestId('MdLightMode')).toBeInTheDocument()
    expect(screen.queryByTestId('MdDarkMode')).not.toBeInTheDocument()
  })

  it('renders with dark mode icon when current theme is light', () => {
    setup('light', true)

    expect(screen.getByTestId('MdDarkMode')).toBeInTheDocument()
    expect(screen.queryByTestId('MdLightMode')).not.toBeInTheDocument()
  })

  it('disables the button when the component is not mounted', () => {
    setup('dark', false)

    const button = screen.getByRole('button', { name: 'Change theme' })

    expect(button).toBeDisabled()
  })

  it('enables the button when the component is mounted', () => {
    setup('dark', true)

    const button = screen.getByRole('button', { name: 'Change theme' })

    expect(button).toBeEnabled()
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
