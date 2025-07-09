import { withThemeByClassName } from '@storybook/addon-themes'

export const withDarkMode = withThemeByClassName({
  themes: {
    light: 'light',
    dark: 'dark',
  },
  defaultTheme: 'light',
})
