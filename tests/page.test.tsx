import { ThemeButton } from '@/_/ThemeButton'
import { useIsMounted } from '@/_/ThemeButton/useIsMounted'
import { getNextTheme } from '@/_/themes.utils'
import { useTheme } from '@/_/useTheme'
import { fireEvent, render, screen } from '@testing-library/react'

jest.mock('@/_/useTheme', () => ({
  useTheme: jest.fn()
}))

jest.mock('@/_/ThemeButton/useIsMounted', () => ({
  useIsMounted: jest.fn()
}))

jest.mock('@/_/themes.utils', () => ({
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
