import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router'

import { Home } from './pages/home'
import { RootLayout } from './pages/root-layout'

import '@fontsource-variable/sora'
import '@/assets/tailwind.css'

const container = document.getElementById('root')
if (!container) {
  throw new Error('Root element not found')
}
const router = createHashRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
])

createRoot(container).render(<RouterProvider router={router} />)
