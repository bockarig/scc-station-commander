import { AlertTriangle } from 'lucide-react'

import { Card } from '@/components/ui/card'

interface AlertsCardProps {
  belowTargetCount: number
  needSupportCount: number
  performingWellCount: number
  isStationWide?: boolean
}

export function AlertsCard({
  belowTargetCount,
  needSupportCount,
  performingWellCount,
  isStationWide = false,
}: AlertsCardProps) {
  const totalAlerts = belowTargetCount + needSupportCount

  return (
    <Card className="rounded-sm p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="mb-1 text-sm font-medium text-gray-600">
            {isStationWide ? 'Station Alerts' : 'Performance Alerts'}
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-gray-900">{totalAlerts}</span>
            <span className="rounded-sm bg-gray-300 px-2 py-1 text-sm font-medium text-gray-900">
              {totalAlerts > 5 ? 'High' : totalAlerts > 2 ? 'Medium' : 'Low'}
            </span>
          </div>
          <p className="mt-1 text-xs text-gray-500">
            {isStationWide ? 'Across all clusters' : 'Require immediate attention'}
          </p>
        </div>
        <div className="rounded-sm bg-gray-100 p-2">
          <AlertTriangle className="h-8 w-8 text-gray-700" />
        </div>
      </div>

      {/* Alert Breakdown */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-sm bg-gray-800"></div>
            <span className="text-xs text-gray-600">Below Target</span>
          </div>
          <span className="text-sm font-medium text-gray-900">{belowTargetCount}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-sm bg-gray-600"></div>
            <span className="text-xs text-gray-600">Need Support</span>
          </div>
          <span className="text-sm font-medium text-gray-900">{needSupportCount}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-sm bg-gray-400"></div>
            <span className="text-xs text-gray-600">Performing Well</span>
          </div>
          <span className="text-sm font-medium text-gray-900">{performingWellCount}</span>
        </div>
      </div>
    </Card>
  )
}
