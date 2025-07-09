import React, { useEffect } from 'react'
import type { Decorator } from '@storybook/react-vite'

const DEFAULT_GRAY_COLOR = 'slate'
const DEFAULT_ACCENT_COLOR = 'cyan'
const DEFAULT_RADIUS = 'tiny'
const DEFAULT_SCALING = '100%'

export const withThemeProvider: Decorator = (Story, { parameters }) => {
  const {
    grayColor = DEFAULT_GRAY_COLOR,
    accentColor = DEFAULT_ACCENT_COLOR,
    radius = DEFAULT_RADIUS,
    scaling = DEFAULT_SCALING,
  } = parameters
  useEffect(() => {
    // Ensure the theme is set to light on an initial load
    document.documentElement.classList.add('creightit', 'antialiased')
    document.documentElement.setAttribute('data-gray-color', grayColor)
    document.documentElement.setAttribute('data-accent-color', accentColor)

    document.documentElement.setAttribute('data-is-root-theme', 'true')
    document.documentElement.setAttribute('data-scaling', scaling)
    document.documentElement.setAttribute('data-radius', radius)
  }, [])

  return <Story />
}
