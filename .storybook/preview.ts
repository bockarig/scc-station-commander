import type { Preview } from '@storybook/react-vite'

import '@/assets/tailwind.css'

import { withDarkMode } from './decorators/withDarkMode.ts'
import { withThemeProvider } from './decorators/withThemeProvider.tsx'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export const decorators = [withDarkMode, withThemeProvider]

export default preview
