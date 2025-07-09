import React from 'react'
import { Outlet } from 'react-router'

// TODO: Add application shell
export const RootLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}
