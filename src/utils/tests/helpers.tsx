import { RenderResult, render } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

export * from '@testing-library/react'
export { renderWithTheme as render }
