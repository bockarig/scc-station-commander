import { defineAppConfig } from "#imports"

import { AMZL_ROLES } from "./config"

// Define types for your config
declare module "wxt/utils/define-app-config" {
  export interface WxtAppConfig {
    theme?: "light" | "dark"
    alias: string
    homeFacility: string
    role: AMZL_ROLES
    firstName: string
    lastName: string
    // TODO: force this format "hh:mmAM-hh:mmPM"
    shiftHours: string
    shiftDays: string[]
  }
}

export default defineAppConfig({
  theme: "dark",
  alias: "bockarig",
  homeFacility: "DGT8",
  role: AMZL_ROLES.PROCESS_ASSISTANT,
  firstName: "George",
  lastName: "Bockari",
  shiftHours: "12:20AM-12:50PM",
  shiftDays: ["Thursday", "Friday", "Saturday"],
})
