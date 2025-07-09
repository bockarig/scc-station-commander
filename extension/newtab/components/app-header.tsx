import { Logo } from '@/components/logo.tsx'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Workspaces', href: '#', current: false },
  { name: 'Settings', href: '#', current: false },
]

export const AppHeader = () => (
  // FIXME: no width constraint on header
  <header className="px-4 sm:px-6 lg:px-8">
    <div className="overflow flex h-16 sm:space-x-7">
      <div className="hidden shrink-0 sm:flex sm:items-center">
        <a href="#" className="p-1.5">
          <Logo className="size-5 shrink-0 text-gray-900 dark:text-gray-50" aria-hidden={true} />
        </a>
      </div>
      <nav className="-mb-px flex space-x-6" aria-label="Tabs">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={cx(
              item.current
                ? 'border-blue-500 text-blue-500 dark:text-blue-500'
                : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-900 dark:text-gray-300 hover:dark:border-gray-600 hover:dark:text-gray-50',
              'inline-flex items-center border-b-2 px-2 text-sm font-medium whitespace-nowrap',
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  </header>
)
