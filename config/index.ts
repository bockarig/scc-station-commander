export const EXTENSION_CONFIG = {
  name: 'SCC Commander',
  description: 'A better Station Command. SCC at your fingertips.',
  // TODO: Add more configuration options as needed
  // default_locale: "en",
  // defaultTheme: "system",
}

export enum LANE_STATUS {
  HIGH = 'high',
  MEDIUM = 'medium',
  ATTENTION = 'attention',
  EXCELLENT = 'excellent',
  NORMAL = 'normal',
}

export const STATUS_COLORS: Record<LANE_STATUS, string> = {
  [LANE_STATUS.HIGH]: 'bg-danger-soft border-brd-danger',
  [LANE_STATUS.MEDIUM]: 'bg-info-soft border-brd-info',
  [LANE_STATUS.ATTENTION]: 'bg-warning-soft border-brd-warning',
  [LANE_STATUS.EXCELLENT]: 'bg-success-soft border-brd-success',
  [LANE_STATUS.NORMAL]: 'bg-gray-2 border-brd-line',
}

export const getDefaultStatusColors = (status: string) => {
  const laneStatus = status as LANE_STATUS
  return STATUS_COLORS[laneStatus] || 'bg-gray-2 border-brd-line'
}
