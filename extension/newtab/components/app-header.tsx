import { RiCalculatorLine, RiHome4Line, RiMapPin2Line } from '@remixicon/react'
import { NavLink } from 'react-router'

import { Logo } from '@/components/logo.tsx'

const navigation = [
  { name: 'Dashboard', href: '/', icon: RiHome4Line },
  { name: 'Cluster Management', href: '/cluster-management' },
  { name: 'Pick & Stage', href: '/pick-and-stage' },
  { name: 'Tools', href: '/tools' },
]

export const AppHeader = () => (
  // FIXME: no width constraint on header
  <header className="border-brd-line border-b">
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="overflow flex h-16 sm:space-x-7">
        <div className="hidden shrink-0 sm:flex sm:items-center">
          <a href="#" className="p-1.5">
            <Logo className="text-cnt-primary size-5 shrink-0" aria-hidden={true} />
          </a>
        </div>
        <nav className="-mb-px flex space-x-6" aria-label="Tabs">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                cx(
                  isActive
                    ? 'border-brd-accent text-cnt-accent'
                    : 'text-cnt-secondary hover:border-brd-control hover:text-cnt-primary border-transparent',
                  'inline-flex items-center gap-x-2 border-b-2 px-2 text-sm font-semibold whitespace-nowrap',
                )
              }
              // aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  </header>
)
