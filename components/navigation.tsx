import { HouseIcon, PackageIcon, ToolboxIcon, TruckIcon } from '@phosphor-icons/react'
import {
  RiBankCard2Line,
  RiCustomerService2Fill,
  RiExchange2Line,
  RiHome4Line,
} from '@remixicon/react'
import { NavLink, useMatches } from 'react-router'

import { TabNavigation, TabNavigationLink } from '@/components/ui/tab-navigation'
import { Logo } from '@/components/logo'
import { ThemeToggle } from '@/components/theme-toggle.tsx'

// import { Notifications } from './Notifications'
// import { DropdownUserProfile } from './UserProfile'

function Navigation() {
  const match = useMatches().at(-1)
  // @ts-ignore
  const { pathname } = match
  return (
    <div className="shadow-s bg-surface sticky top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 pt-3 sm:px-6">
        <div className="flex items-center gap-2">
          <Logo className="text-accent-9 h-6" />
          <span className="text-cnt-accent text-base font-bold tracking-wider">SCC Commander</span>
        </div>
        <div className="flex h-[42px] flex-nowrap gap-1">
          {/*<Notifications />*/}
          {/*<DropdownUserProfile />*/}
          <ThemeToggle />
        </div>
      </div>
      <TabNavigation className="mt-5">
        <div className="mx-auto flex w-full max-w-7xl items-center px-6">
          <TabNavigationLink asChild active={pathname === '/'}>
            <NavLink to="/" className="inline-flex items-center gap-x-2">
              <HouseIcon weight="bold" className="mr-2 size-4" aria-hidden="true" />
              Dashboard
            </NavLink>
          </TabNavigationLink>
          <TabNavigationLink
            className="inline-flex gap-2"
            asChild
            active={pathname === '/cluster-management'}
          >
            <NavLink to="/cluster-management" className="inline-flex items-center gap-x-2">
              <PackageIcon weight="bold" className="mr-2 size-4" aria-hidden="true" />
              Cluster Management
            </NavLink>
          </TabNavigationLink>
          <TabNavigationLink
            className="inline-flex gap-2"
            asChild
            active={pathname === '/pick-and-stage'}
          >
            <NavLink to="/pick-and-stage" className="inline-flex items-center gap-x-2">
              <TruckIcon weight="bold" className="mr-2 size-4" aria-hidden="true" />
              Pick & Stage
            </NavLink>
          </TabNavigationLink>
          <TabNavigationLink className="inline-flex gap-2" asChild active={pathname === '/tools'}>
            <NavLink to="/tools" className="inline-flex items-center gap-x-2">
              <ToolboxIcon weight="bold" className="mr-2 size-4" aria-hidden="true" />
              Tools
            </NavLink>
          </TabNavigationLink>
        </div>
      </TabNavigation>
    </div>
  )
}

export { Navigation }
