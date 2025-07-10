import React from 'react'

import { ViewRouteMatch } from '@/components/view-route-match.tsx'

export const ClusterManagement = () => {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-5xl font-semibold tracking-tight sm:text-7xl">
          Cluster Management <span className="text-cnt-tertiary text-lg">(coming soon)</span>
        </h2>
        <p className="text-cnt-secondary mt-8 text-lg font-medium text-pretty sm:text-xl/8">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
          Elit sunt amet fugiat veniam occaecat fugiat.
        </p>
      </div>
      <div className="mt-16">
        <ViewRouteMatch className="mx-auto max-w-xl" />
      </div>
    </div>
  )
}
