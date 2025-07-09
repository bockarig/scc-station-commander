import { AppHeader } from '@/extension/newtab/components/app-header.tsx'
import { Outlet } from 'react-router'

import { ThemeProvider } from '@/components/theme-provider'

export const RootLayout = () => (
  <>
    <ThemeProvider defaultTheme="system">
      <AppHeader />
      <div className="p-4 sm:p-6 lg:p-8">
        <Outlet />
      </div>
    </ThemeProvider>
  </>
)
