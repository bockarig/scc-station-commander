import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router'

import { Home } from './pages/home'
import { RootLayout } from './pages/root-layout'

import '@/assets/tailwind.css'

import { ClusterManagement } from '@/extension/newtab/pages/cluster-management'
import { PickAndStage } from '@/extension/newtab/pages/pick-and-stage'
import { Tools } from '@/extension/newtab/pages/tools'

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
      {
        path: '/cluster-management',
        Component: ClusterManagement,
      },
      {
        path: '/pick-and-stage',
        Component: PickAndStage,
      },
      {
        path: '/tools',
        Component: Tools,
      },
    ],
  },
])

createRoot(container).render(<RouterProvider router={router} />)
