import React from 'react'
import { ActionPanel } from '@/extension/newtab/pages/home/action-panel.tsx'

export const Home = () => {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-5xl font-semibold tracking-tight sm:text-7xl">
          Page Title <span className="text-cnt-tertiary text-lg">(path)</span>
        </h2>
        <p className="text-cnt-secondary mt-8 text-lg font-medium text-pretty sm:text-xl/8">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
          Elit sunt amet fugiat veniam occaecat fugiat.
        </p>
      </div>
      <div className="mt-16">
        <ActionPanel className="mx-auto max-w-xl" />
      </div>
    </div>
  )
}
