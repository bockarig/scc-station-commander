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
        return { percentage: '+12.5%', color: 'text-gray-900 bg-gray-200' }
      case 'down':
        return { percentage: '-2.8%', color: 'text-gray-700 bg-gray-300' }
      default:
        return { percentage: '+1.2%', color: 'text-gray-600 bg-gray-100' }
    }
  }

  const trendData = getTrendData()

  return (
    <Card className="rounded-sm p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="mb-1 text-sm font-medium text-gray-600">
            {isStationWide ? 'Station Volume' : 'Volume'}
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-gray-900">{current.toLocaleString()}</span>
            <span className={`rounded-sm px-2 py-1 text-sm font-medium ${trendData.color}`}>
              {trendData.percentage}
            </span>
          </div>
          <p className="mt-1 text-xs text-gray-500">
            of {capacity.toLocaleString()} total capacity
            {isStationWide && ' across all clusters'}
          </p>
        </div>
        <div className="rounded-sm bg-gray-100 p-2">
          <Package className="h-8 w-8 text-gray-700" />
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
                className={`w-full rounded-t-sm ${isCurrentHour ? 'bg-gray-800' : 'bg-gray-400'} transition-all`}
                style={{ height: `${height}%` }}
              />
            </div>
          )
        })}
      </div>
      <div className="mt-2 flex justify-between text-xs text-gray-400">
        <span>12 hrs ago</span>
        <span>Now</span>
      </div>
    </Card>
  )
}
