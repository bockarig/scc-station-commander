import tailwindcss from "@tailwindcss/vite"
import postcssRemToPx from "@thedutchcoder/postcss-rem-to-px"
import { defineConfig } from "wxt"

import { EXTENSION_CONFIG } from "./config"

const isDevelopment = process.env.NODE_ENV === "development"

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  entrypointsDir: "extension",
  publicDir: "static",
  webExt: {
    disabled: true,
  },
  vite: () => ({
    plugins: [tailwindcss()],
    css: {
      postcss: {
        plugins: [
          postcssRemToPx,
          // ...other PostCSS plugins
        ],
      },
    },
  }),
  manifest: {
    name: isDevelopment ? `DEV | ${EXTENSION_CONFIG.name}` : EXTENSION_CONFIG.name,
    description: EXTENSION_CONFIG.description,
    permissions: ["storage"],
  },
})
