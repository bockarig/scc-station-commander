import { Outlet } from 'react-router'

import { Navigation } from '@/components/navigation.tsx'
import { ThemeProvider } from '@/components/theme-provider'

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
