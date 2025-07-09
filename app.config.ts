import { defineAppConfig } from '#imports'

export enum AMZL_ROLES {
  PROCESS_ASSISTANT = 'Process Assistant',
  AREA_MANAGER = 'Area Manager',
  SORTATION_MANAGER = 'Sortation Manager',
  SORTATION_ASSOCIATE = 'Sortation Associate',
  AMBASSADOR = 'Ambassador',
  LINE_LEADER = 'Line Leader',
}

// Define types for your config
declare module 'wxt/utils/define-app-config' {
  export interface WxtAppConfig {
    theme?: 'light' | 'dark' | 'system'
    alias: string
    homeFacility: string
    role: AMZL_ROLES
    firstName: string
    lastName: string
    // TODO: force a format similar to 12:20AM-12:50PM (HH:mmA-HH:mmA)
    shiftHours: string
    // TODO: must be days of the week, e.g., ['Monday', 'Tuesday', 'Wednesday']
    shiftDays: string[]
  }
}

export default defineAppConfig({
  theme: 'system',
  alias: 'bockarig',
  homeFacility: 'DGT8',
  role: AMZL_ROLES.PROCESS_ASSISTANT,
  firstName: 'George',
  lastName: 'Bockari',
  shiftHours: '12:20AM-12:50PM',
  shiftDays: ['Thursday', 'Friday', 'Saturday'],
})
