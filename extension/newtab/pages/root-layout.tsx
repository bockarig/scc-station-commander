import { Outlet } from 'react-router'

import { ThemeProvider } from '@/components/theme-provider'

import { Navigation } from '../components/navigation.tsx'

export const RootLayout = () => (
  <>
    <ThemeProvider defaultTheme="system">
      <Navigation />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <Outlet />
      </div>
    </ThemeProvider>
  </>
)
