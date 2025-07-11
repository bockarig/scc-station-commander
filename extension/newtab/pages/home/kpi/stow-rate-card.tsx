import { TrendUpIcon } from '@phosphor-icons/react'
import { TrendingUp } from 'lucide-react'

import { Card } from '@/components/ui/card'

interface StowRateCardProps {
  currentRate: number
  targetRate: number
  isStationWide?: boolean
  totalStowers?: number
}

export function StowRateCard({
  currentRate,
  targetRate,
  isStationWide = false,
  totalStowers,
}: StowRateCardProps) {
  return (
    <Card className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="mb-1 text-sm font-medium">
            {isStationWide ? 'Station Avg Stow Rate' : 'Avg Stow Rate'}
          </h2>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">{Math.round(currentRate)}</span>
            <span className="bg-gray-7 rounded px-2 py-1 text-sm font-medium">+3.7%</span>
          </div>
          <p className="text-cnt-secondary mt-1 text-xs">
            Target: {targetRate} packages/hour
            {isStationWide && totalStowers && ` • ${totalStowers} stowers`}
          </p>
        </div>
        <div className="rounded p-2">
          <TrendUpIcon weight="duotone" className="h-8 w-8" />
        </div>
      </div>

      {/* Performance Line Chart - station-wide trend */}
      <div className="relative h-16">
        <svg className="h-full w-full" viewBox="0 0 200 60">
          <defs>
            <linearGradient id="stationPerformanceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6b7280" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6b7280" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 Q30,45 60,35 Q120,25 160,20 T200,18"
            stroke="#6b7280"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0,50 Q30,45 60,35 Q120,25 160,20 T200,18 L200,60 L0,60 Z"
            fill="url(#stationPerformanceGradient)"
          />
          <circle cx="200" cy="18" r="3" fill="#6b7280" />
        </svg>
      </div>
      <div className="mt-2 flex justify-between text-xs text-gray-400">
        <span>6 AM</span>
        <span>Now</span>
      </div>
    </Card>
  )
}
