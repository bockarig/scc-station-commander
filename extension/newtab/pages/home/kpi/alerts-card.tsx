import { WarningDiamondIcon } from '@phosphor-icons/react'
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
          <h2 className="mb-1 text-sm font-medium">
            {isStationWide ? 'Station Alerts' : 'Performance Alerts'}
          </h2>
          <div className="flex items-baseline gap-2">
            <span className="text-cnt-primary text-3xl font-bold">{totalAlerts}</span>
            <span className="text-cnt-primary bg-gray-7 rounded px-2 py-1 text-sm font-medium">
              {totalAlerts > 5 ? 'High' : totalAlerts > 2 ? 'Medium' : 'Low'}
            </span>
          </div>
          <p className="text-cnt-secondary mt-1 text-xs">
            {isStationWide ? 'Across all clusters' : 'Require immediate attention'}
          </p>
        </div>
        <div className="rounded p-2">
          <WarningDiamondIcon weight="duotone" className="h-8 w-8" />
        </div>
      </div>

      {/* Alert Breakdown */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gray-5 h-2 w-2 rounded-sm"></div>
            <span className="text-cnt-secondary text-xs">Below Target</span>
          </div>
          <span className="text-cnt-primary text-sm font-medium">{belowTargetCount}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gray-8 h-2 w-2 rounded-sm"></div>
            <span className="text-cnt-secondary text-xs">Need Support</span>
          </div>
          <span className="text-cnt-primary text-sm font-medium">{needSupportCount}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gray-11 h-2 w-2 rounded-sm"></div>
            <span className="text-cnt-secondary text-xs">Performing Well</span>
          </div>
          <span className="text-cnt-primary text-sm font-medium">{performingWellCount}</span>
        </div>
      </div>
    </Card>
  )
}
