interface LaneCardProps {
  lane: {
    id: string
    status: string
    volume: number
    capacity: number
    cluster: string
  }
  selectedStowerSheet: any
  selectedBufferSheet: any
  isLaneInAssignment: (laneId: string, assignment: string) => boolean
  getStatusColor: (status: string) => string
  onClick?: (laneId: string) => void
}

const getHighlightedColor = (status: string): string => {
  const colorMap: Record<string, string> = {
    high: 'bg-gray-400 border-gray-700 shadow-lg ring-2 ring-gray-500',
    medium: 'bg-gray-4 border-gray-600 shadow-lg ring-2 ring-gray-400',
    attention: 'bg-gray-4 border-gray-600 shadow-lg ring-2 ring-gray-400',
    excellent: 'bg-gray-3 border-gray-500 shadow-lg ring-2 ring-gray-300',
  }
  return colorMap[status] || 'bg-gray-3 border-gray-600 shadow-lg ring-2 ring-gray-400'
}

const getStatusIndicatorColor = (status: string): string => {
  const statusColors: Record<string, string> = {
    high: 'bg-red-500',
    medium: 'bg-yellow-500',
  }
  return statusColors[status] || 'bg-gray-400'
}

const getStatusMessage = (status: string): string => {
  const statusMessages: Record<string, string> = {
    high: '⚠️ High Volume',
    medium: '⚡ Moderate Load',
    normal: '✅ Normal Flow',
  }
  return statusMessages[status] || ''
}

const calculateCapacityBarColor = (
  lane: { volume: number; capacity: number; status: string },
  isHighlighted: boolean,
  isDeemphasized: boolean,
): string => {
  if (isHighlighted) {
    const highlightedColorMap: Record<string, string> = {
      high: 'bg-gray-800',
      medium: 'bg-gray-700',
      attention: 'bg-gray-700',
    }
    return highlightedColorMap[lane.status] || 'bg-gray-600'
  }

  if (isDeemphasized) {
    return 'bg-gray-400'
  }

  const utilizationRatio = lane.volume / lane.capacity
  if (utilizationRatio > 0.8) return 'bg-red-500'
  if (utilizationRatio > 0.6) return 'bg-yellow-500'
  return 'bg-gray-600'
}

export const LaneCard = ({
  lane,
  selectedStowerSheet,
  selectedBufferSheet,
  isLaneInAssignment,
  getStatusColor,
  onClick,
}: LaneCardProps) => {
  const isHighlighted =
    (selectedStowerSheet && isLaneInAssignment(lane.id, selectedStowerSheet.assignment)) ||
    (selectedBufferSheet && isLaneInAssignment(lane.id, selectedBufferSheet.assignment))

  const hasSelectedAssociate = selectedStowerSheet || selectedBufferSheet
  const isDeemphasized = hasSelectedAssociate && !isHighlighted
  const baseStatusColor = getStatusColor(lane.status)
  const capacityPercentage = Math.round((lane.volume / lane.capacity) * 100)
  const isHighCapacity = lane.volume > lane.capacity * 0.8
  const estimatedClearTime = Math.round(lane.volume / 15)

  const getClassName = (): string => {
    const baseClasses =
      'group relative cursor-pointer rounded-sm border-2 p-3 text-center hover:shadow-md'

    if (isHighlighted) {
      return `${baseClasses} ${getHighlightedColor(lane.status)} z-10`
    }

    if (isDeemphasized) {
      return `${baseClasses} ${baseStatusColor} opacity-30 grayscale`
    }

    return `${baseClasses} ${baseStatusColor}`
  }

  const handleClick = () => {
    if (onClick) {
      onClick(lane.id)
    } else {
      console.log(`Lane ${lane.id} clicked - show detailed view`)
    }
  }

  return (
    <div key={lane.id} className={getClassName()} onClick={handleClick}>
      {isHighlighted && (
        <div className="absolute -top-1 -right-1 h-3 w-3 rounded-sm border-2 border-white bg-blue-600"></div>
      )}

      <div className={`text-sm font-medium ${isDeemphasized ? 'text-gray-400' : ''}`}>
        {lane.id}
      </div>

      <div
        className={`mt-1 text-xs font-medium ${
          isDeemphasized ? 'text-gray-400' : isHighCapacity ? 'text-red-700' : 'text-cnt-secondary'
        }`}
      >
        {capacityPercentage}%
      </div>

      {lane.status !== 'normal' && (
        <div
          className={`absolute top-1 left-1 h-2 w-2 rounded-full ${getStatusIndicatorColor(lane.status)}`}
        ></div>
      )}

      <div className="bg-opacity-75 absolute inset-0 flex flex-col items-center justify-center rounded-sm bg-black p-2 text-xs text-white opacity-0 group-hover:opacity-100">
        <div className="font-medium">
          {lane.volume}/{lane.capacity} packages
        </div>
        <div className="mt-1">{getStatusMessage(lane.status)}</div>
        <div className="mt-1 text-center">Est. clear: {estimatedClearTime}min</div>
      </div>

      <div className="bg-gray-3 mt-2 h-1.5 w-full rounded-sm">
        <div
          className={`h-1.5 rounded-sm ${calculateCapacityBarColor(lane, isHighlighted, isDeemphasized)}`}
          style={{ width: `${Math.min(capacityPercentage, 100)}%` }}
        ></div>
      </div>
    </div>
  )
}
