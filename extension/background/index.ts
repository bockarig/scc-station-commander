import { useAppConfig } from "#imports"

export default defineBackground(() => {
  console.log(useAppConfig()) // { theme: "dark" }
  browser.runtime.onInstalled.addListener(({ reason }) => {
    if (reason === "install") {
      storage.setItem("local:installDate", new Date().toISOString())
    }
  })
})
