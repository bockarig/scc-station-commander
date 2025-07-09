import React from 'react'
import { Outlet } from 'react-router'

// TODO: Add application shell
export const RootLayout = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <Outlet />
    </div>
  )
}
