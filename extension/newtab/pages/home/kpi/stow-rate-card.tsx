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
    <Card className="rounded-sm p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="mb-1 text-sm font-medium text-gray-600">
            {isStationWide ? 'Station Avg Stow Rate' : 'Avg Stow Rate'}
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-gray-900">{Math.round(currentRate)}</span>
            <span className="rounded-sm bg-gray-200 px-2 py-1 text-sm font-medium text-gray-900">
              +3.7%
            </span>
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Target: {targetRate} packages/hour
            {isStationWide && totalStowers && ` • ${totalStowers} stowers`}
          </p>
        </div>
        <div className="rounded-sm bg-gray-100 p-2">
          <TrendingUp className="h-8 w-8 text-gray-700" />
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
