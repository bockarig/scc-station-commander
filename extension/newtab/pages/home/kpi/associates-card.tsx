import { UsersThreeIcon } from '@phosphor-icons/react'
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
    <Card className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="mb-1 text-sm font-medium">
            {isStationWide ? 'Total Associates' : 'Associates'}
          </h2>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">{totalCount}</span>
            <span className="bg-gray-7 rounded px-2 py-1 text-sm font-medium">On Prem </span>
          </div>
          <p className="text-cnt-secondary mt-1 text-xs">
            {stowersCount} stowers, {buffersCount} buffers
            {isStationWide && clusterCount && ` • ${clusterCount} clusters`}
          </p>
        </div>
        <div className="rounded">
          <UsersThreeIcon weight="duotone" className="h-8 w-8" />
        </div>
      </div>

      {/* Stacked Bar Chart */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs">
          <div className="bg-gray-9 h-2 w-2 rounded"></div>
          <span className="text-cnt-secondary">Stowers</span>
          <div className="bg-gray-5 ml-4 h-2 w-2 rounded"></div>
          <span className="text-cnt-secondary">Buffers</span>
        </div>
        <div className="flex h-8 overflow-hidden rounded bg-gray-100">
          <div
            className="bg-gray-9 h-full"
            style={{
              width: `${(stowersCount / totalCount) * 100}%`,
            }}
          />
          <div
            className="bg-gray-5 h-full"
            style={{
              width: `${(buffersCount / totalCount) * 100}%`,
            }}
          />
        </div>
      </div>
      <div className="text-cnt-tertiary mt-2 flex justify-between text-xs">
        <span>{stowersCount} Stowers</span>
        <span>{buffersCount} Buffers</span>
      </div>
    </Card>
  )
}
