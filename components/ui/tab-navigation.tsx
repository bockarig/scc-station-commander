// Tremor TabNavigation [v0.1.0]

import React from 'react'
import { cx, focusRing } from '@/utils'
import * as NavigationMenuPrimitives from '@radix-ui/react-navigation-menu'

interface SubtreeOptions {
  asChild?: boolean
  children: React.ReactNode
}

type ContentRenderer = (children: React.ReactNode) => React.ReactNode

export function getSubtree(
  options: SubtreeOptions,
  content: React.ReactNode | ContentRenderer,
): React.ReactNode {
  const { asChild, children } = options

  if (!asChild) {
    return typeof content === 'function' ? content(children) : content
  }

  const firstChild = React.Children.only(children) as React.ReactElement<{
    children?: React.ReactNode
  }>
  const contentValue = typeof content === 'function' ? content(firstChild.props.children) : content

  return React.cloneElement(firstChild, { children: contentValue })
}

const TabNavigation = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitives.Root>,
  Omit<
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.Root>,
    'orientation' | 'defaultValue' | 'dir'
  >
>(({ className, children, ...props }, forwardedRef) => (
  <NavigationMenuPrimitives.Root
    ref={forwardedRef}
    {...props}
    tremor-id="tremor-raw"
    asChild={false}
  >
    <NavigationMenuPrimitives.List
      className={cx(
        // base
        'flex items-center justify-start border-b whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
        // border color
        'border-gray-200 dark:border-gray-800',
        className,
      )}
    >
      {children}
    </NavigationMenuPrimitives.List>
  </NavigationMenuPrimitives.Root>
))

TabNavigation.displayName = 'TabNavigation'

const TabNavigationLink = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitives.Link>,
  Omit<React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.Link>, 'onSelect'> & {
    disabled?: boolean
  }
>(({ asChild, disabled, className, children, ...props }, forwardedRef) => (
  <NavigationMenuPrimitives.Item className="flex" aria-disabled={disabled}>
    <NavigationMenuPrimitives.Link
      aria-disabled={disabled}
      className={cx(
        'group relative flex shrink-0 items-center justify-center select-none',
        disabled ? 'pointer-events-none' : '',
      )}
      ref={forwardedRef}
      onSelect={() => {}}
      asChild={asChild}
      {...props}
    >
      {getSubtree({ asChild, children }, (children) => (
        <span
          className={cx(
            // base
            'flex items-center justify-center border-b-2 border-transparent px-3 pb-2 text-sm font-medium whitespace-nowrap transition-all',
            // text color
            'text-cnt-secondary',
            // hover
            'group-hover:text-cnt-primary',
            // border hover
            'group-hover:border-brd-ring',
            // selected
            'group-data-[active]:border-brd-accent group-data-[active]:text-cnt-accent',
            // disabled
            disabled ? 'text-gray-9 pointer-events-none' : '',
            focusRing,
            className,
          )}
        >
          {children}
        </span>
      ))}
    </NavigationMenuPrimitives.Link>
  </NavigationMenuPrimitives.Item>
))

TabNavigationLink.displayName = 'TabNavigationLink'

export { TabNavigation, TabNavigationLink }
