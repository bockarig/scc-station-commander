import React from "react"
import { createRoot } from "react-dom/client"

import "@/assets/tailwind.css"

import { App } from "./app.tsx"

const container = document.getElementById("root")

const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
