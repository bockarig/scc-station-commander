import { PackageIcon } from '@phosphor-icons/react'
import { Package } from 'lucide-react'

import { Card } from '@/components/ui/card'

interface VolumeCardProps {
  current: number
  capacity: number
  trend: 'up' | 'down' | 'stable'
  isStationWide?: boolean
}

export function VolumeCard({ current, capacity, trend, isStationWide = false }: VolumeCardProps) {
  const getTrendData = () => {
    switch (trend) {
      case 'up':
        return { percentage: '+12.5%', color: 'text-cnt-primary bg-gray-7' }
      case 'down':
        return { percentage: '-2.8%', color: 'text-cnt-secondary bg-gray-5' }
      default:
        return { percentage: '+1.2%', color: 'text-cnt-tertiary bg-gray-3' }
    }
  }

  const trendData = getTrendData()

  return (
    <Card className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="mb-1 text-sm font-medium">
            {isStationWide ? 'Station Volume' : 'Volume'}
          </h2>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">{current.toLocaleString()}</span>
            <span className={`rounded px-2 py-1 text-sm font-medium ${trendData.color}`}>
              {trendData.percentage}
            </span>
          </div>
          <p className="text-cnt-secondary mt-1 text-xs">
            of {capacity.toLocaleString()} total capacity
            {isStationWide && ' across all clusters'}
          </p>
        </div>
        <div className="rounded p-2">
          <PackageIcon weight="duotone" className="h-8 w-8" />
        </div>
      </div>

      {/* Volume Chart - showing station-wide hourly data */}
      <div className="flex h-16 items-end justify-between gap-1">
        {Array.from({ length: 12 }, (_, i) => {
          // Generate more realistic station-wide volume data
          const baseHeight = 40 + Math.sin(i * 0.5) * 20 + Math.random() * 15
          const height = Math.max(20, Math.min(80, baseHeight))
          const isCurrentHour = i === 11
          return (
            <div key={i} className="flex flex-1 flex-col items-center">
              <div
                className={`w-full rounded-t-sm ${isCurrentHour ? 'bg-gray-800' : 'bg-pink-500'} transition-all`}
                style={{ height: `${height}%` }}
              />
            </div>
          )
        })}
      </div>
      <div className="text-cnt-tertiary mt-2 flex justify-between text-xs">
        <span>12 hrs ago</span>
        <span>Now</span>
      </div>
    </Card>
  )
}
