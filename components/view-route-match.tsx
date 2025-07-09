import { cx } from '@/utils'
import { useMatch, useMatches } from 'react-router'

export interface ViewRouteMatch {
  className?: string
  title?: string
  data?: Record<string, any>
  path?: string
}
export const ViewRouteMatch = ({ className, title, data, path }: ViewRouteMatch) => {
  const match = path ? useMatch(path) : useMatches()
  return (
    <div
      className={cx(
        'bg-surface shadow-sm [--tw-shadow-color:var(--color-black-a4)] sm:rounded-lg',
        className,
      )}
    >
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold text-gray-900">
          {title ? title : path ? 'useMatch' : 'useMatches'}
        </h3>
        <div className="mt-5">
          <div className="bg-gray-3 rounded-md px-6 py-5 sm:flex sm:items-start sm:justify-between">
            <h4 className="sr-only">Action Panel</h4>
            <pre>{JSON.stringify(data ?? match, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}
