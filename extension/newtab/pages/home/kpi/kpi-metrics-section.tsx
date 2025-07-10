import { AlertsCard } from './alerts-card'
import { AssociatesCard } from './associates-card'
import { StowRateCard } from './stow-rate-card'
import { VolumeCard } from './volume-card'

interface KpiMetricsSectionProps {
  stationData: {
    totalVolume: {
      current: number
      capacity: number
      trend: 'up' | 'down' | 'stable'
    }
    allStowers: Array<{
      currentRate: number
      target: number
      status: 'above' | 'below'
    }>
    allBuffers: Array<{
      performance: 'excellent' | 'good' | 'attention'
    }>
    clusterCount: number
  }
}

export function KpiMetricsSection({ stationData }: KpiMetricsSectionProps) {
  // Calculate station-wide metrics
  const avgStowRate =
    stationData.allStowers.reduce((acc, s) => acc + s.currentRate, 0) /
    stationData.allStowers.length
  const targetRate = stationData.allStowers[0]?.target || 90

  const belowTargetCount = stationData.allStowers.filter((s) => s.status === 'below').length
  const needSupportCount = stationData.allBuffers.filter(
    (b) => b.performance === 'attention',
  ).length
  const performingWellCount =
    stationData.allStowers.filter((s) => s.status === 'above').length +
    stationData.allBuffers.filter((b) => b.performance === 'excellent' || b.performance === 'good')
      .length

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-4">
      <VolumeCard
        current={stationData.totalVolume.current}
        capacity={stationData.totalVolume.capacity}
        trend={stationData.totalVolume.trend}
        isStationWide={true}
      />

      <StowRateCard
        currentRate={avgStowRate}
        targetRate={targetRate}
        isStationWide={true}
        totalStowers={stationData.allStowers.length}
      />

      <AssociatesCard
        stowersCount={stationData.allStowers.length}
        buffersCount={stationData.allBuffers.length}
        clusterCount={stationData.clusterCount}
        isStationWide={true}
      />

      <AlertsCard
        belowTargetCount={belowTargetCount}
        needSupportCount={needSupportCount}
        performingWellCount={performingWellCount}
        isStationWide={true}
      />
    </div>
  )
}
