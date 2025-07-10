import { Users } from 'lucide-react'

import { Card } from '@/components/ui/card'

interface AssociatesCardProps {
  stowersCount: number
  buffersCount: number
  clusterCount?: number
  isStationWide?: boolean
}

export function AssociatesCard({
  stowersCount,
  buffersCount,
  clusterCount,
  isStationWide = false,
}: AssociatesCardProps) {
  const totalCount = stowersCount + buffersCount

  return (
    <Card className="rounded-sm p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="mb-1 text-sm font-medium text-gray-600">
            {isStationWide ? 'Total Associates' : 'Associates'}
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-gray-900">{totalCount}</span>
            <span className="rounded-sm bg-gray-200 px-2 py-1 text-sm font-medium text-gray-900">
              On Prem{' '}
            </span>
          </div>
          <p className="mt-1 text-xs text-gray-500">
            {stowersCount} stowers, {buffersCount} buffers
            {isStationWide && clusterCount && ` • ${clusterCount} clusters`}
          </p>
        </div>
        <div className="rounded-sm bg-gray-100 p-2">
          <Users className="h-8 w-8 text-gray-700" />
        </div>
      </div>

      {/* Stacked Bar Chart */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs">
          <div className="h-2 w-2 rounded-sm bg-gray-700"></div>
          <span className="text-gray-600">Stowers</span>
          <div className="ml-4 h-2 w-2 rounded-sm bg-gray-400"></div>
          <span className="text-gray-600">Buffers</span>
        </div>
        <div className="flex h-8 overflow-hidden rounded-sm bg-gray-100">
          <div
            className="h-full bg-gray-700"
            style={{
              width: `${(stowersCount / totalCount) * 100}%`,
            }}
          />
          <div
            className="h-full bg-gray-400"
            style={{
              width: `${(buffersCount / totalCount) * 100}%`,
            }}
          />
        </div>
      </div>
      <div className="mt-2 flex justify-between text-xs text-gray-400">
        <span>{stowersCount} Stowers</span>
        <span>{buffersCount} Buffers</span>
      </div>
    </Card>
  )
}
