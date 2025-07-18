import React from 'react'
import { cx, focusRing } from '@/utils'
import * as TabsPrimitives from '@radix-ui/react-tabs'

const Tabs = (
  props: Omit<React.ComponentPropsWithoutRef<typeof TabsPrimitives.Root>, 'orientation'>,
) => {
  return <TabsPrimitives.Root tremor-id="tremor-raw" {...props} />
}

Tabs.displayName = 'Tabs'

type TabsListVariant = 'line' | 'solid'

const TabsListVariantContext = React.createContext<TabsListVariant>('line')

interface TabsListProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitives.List> {
  variant?: TabsListVariant
}

const variantStyles: Record<TabsListVariant, string> = {
  line: cx(
    // base
    'flex items-center justify-start border-b',
    // border color
    'border-brd-line',
  ),
  solid: cx(
    // base
    'inline-flex items-center justify-center rounded-lg p-1',
    // background color
    'bg-gray-4',
  ),
}

const TabsList = React.forwardRef<React.ElementRef<typeof TabsPrimitives.List>, TabsListProps>(
  ({ className, variant = 'line', children, ...props }, forwardedRef) => (
    <TabsPrimitives.List
      ref={forwardedRef}
      className={cx(variantStyles[variant], className)}
      {...props}
    >
      <TabsListVariantContext.Provider value={variant}>{children}</TabsListVariantContext.Provider>
    </TabsPrimitives.List>
  ),
)

TabsList.displayName = 'TabsList'

function getVariantStyles(tabVariant: TabsListVariant) {
  switch (tabVariant) {
    case 'line':
      return cx(
        // base
        '-mb-px items-center justify-center border-b-2 border-transparent px-3 pb-2 text-sm font-medium whitespace-nowrap',
        // text color
        'text-cnt-secondary',
        // hover
        'hover:text-gray-700 dark:hover:text-gray-400',
        // border hover
        'hover:border-gray-300 dark:hover:border-gray-400',
        // selected
        'data-[state=active]:border-brd-accent data-[state=active]:text-cnt-accent',
        // disabled
        'data-disabled:pointer-events-none',
        'data-disabled:text-gray-300 dark:data-disabled:text-gray-700',
      )
    case 'solid':
      return cx(
        // base
        'inline-flex items-center justify-center rounded px-3 py-1 text-sm font-semibold whitespace-nowrap ring-1 ring-inset',
        // text color
        'text-cnt-tertiary',
        // hover
        'hover:text-cnt-secondary',
        // ring
        'ring-transparent',
        // selected
        'data-[state=active]:text-cnt-primary [--tw-shadow-color:var(--color-black-a4)] data-[state=active]:bg-white data-[state=active]:shadow-sm',
        'dark:data-[state=active]:bg-page dark:data-[state=active]:text-gray-50',
        // disabled
        'data-disabled:pointer-events-none data-disabled:text-gray-400 data-disabled:opacity-50 dark:data-disabled:text-gray-600',
      )
  }
}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitives.Trigger>
>(({ className, children, ...props }, forwardedRef) => {
  const variant = React.useContext(TabsListVariantContext)
  return (
    <TabsPrimitives.Trigger
      ref={forwardedRef}
      className={cx(getVariantStyles(variant), focusRing, className)}
      {...props}
    >
      {children}
    </TabsPrimitives.Trigger>
  )
})

TabsTrigger.displayName = 'TabsTrigger'

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitives.Content>
>(({ className, ...props }, forwardedRef) => (
  <TabsPrimitives.Content
    ref={forwardedRef}
    className={cx('outline-hidden', focusRing, className)}
    {...props}
  />
))

TabsContent.displayName = 'TabsContent'

export { Tabs, TabsContent, TabsList, TabsTrigger }
