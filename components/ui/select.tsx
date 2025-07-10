import React from 'react'
import { control, cx, focusInput, hasErrorInput } from '@/utils'
import * as SelectPrimitives from '@radix-ui/react-select'
import { RiArrowDownSLine, RiArrowUpSLine, RiCheckLine, RiExpandUpDownLine } from '@remixicon/react'

const Select = SelectPrimitives.Root
Select.displayName = 'Select'

const SelectGroup = SelectPrimitives.Group
SelectGroup.displayName = 'SelectGroup'

const SelectValue = SelectPrimitives.Value
SelectValue.displayName = 'SelectValue'

const selectTriggerStyles = [
  cx(
    // base
    control,
    'group/trigger flex w-full items-center justify-between gap-2 truncate border px-3 py-2 shadow-xs [--tw-shadow-color:var(--color-black-a5)] outline-hidden select-none sm:text-sm lg:transition',
    // border color
    'border-brd-control',
    // text color
    'text-cnt-primary',
    // placeholder
    'data-placeholder:text-cnt-tertiary',
    // background color
    'bg-main',
    // hover
    'hover:bg-gray-4',
    // disabled
    'data-disabled:bg-gray-3 data-disabled:text-gray-9',
    focusInput,
    // invalid (optional)
    // "dark:aria-invalid:ring-red-400/20 aria-invalid:ring-2 aria-invalid:ring-red-200 aria-invalid:border-red-500 invalid:ring-2 invalid:ring-red-200 invalid:border-red-500"
  ),
]

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.Trigger> & {
    hasError?: boolean
  }
>(({ className, hasError, children, ...props }, forwardedRef) => {
  return (
    <SelectPrimitives.Trigger
      ref={forwardedRef}
      className={cx(selectTriggerStyles, hasError ? hasErrorInput : '', className)}
      tremor-id="tremor-raw"
      {...props}
    >
      <span className="truncate">{children}</span>
      <SelectPrimitives.Icon asChild>
        <RiExpandUpDownLine
          className={cx(
            // base
            'size-4 shrink-0',
            // text color
            'text-cnt-secondary',
            // disabled
            'group-data-disabled/trigger:text-gray-9',
          )}
        />
      </SelectPrimitives.Icon>
    </SelectPrimitives.Trigger>
  )
})

SelectTrigger.displayName = 'SelectTrigger'

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitives.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.ScrollUpButton>
>(({ className, ...props }, forwardedRef) => (
  <SelectPrimitives.ScrollUpButton
    ref={forwardedRef}
    className={cx('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <RiArrowUpSLine className="size-3 shrink-0" aria-hidden="true" />
  </SelectPrimitives.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitives.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitives.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.ScrollDownButton>
>(({ className, ...props }, forwardedRef) => (
  <SelectPrimitives.ScrollDownButton
    ref={forwardedRef}
    className={cx('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <RiArrowDownSLine className="size-3 shrink-0" aria-hidden="true" />
  </SelectPrimitives.ScrollDownButton>
))
SelectScrollDownButton.displayName = SelectPrimitives.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.Content>
>(
  (
    { className, position = 'popper', children, sideOffset = 8, collisionPadding = 10, ...props },
    forwardedRef,
  ) => (
    <SelectPrimitives.Portal>
      <SelectPrimitives.Content
        ref={forwardedRef}
        className={cx(
          // base
          'relative z-50 overflow-hidden rounded-md border shadow-xl [--tw-shadow-color:var(--color-black-a1)]',
          // widths
          'max-w-[95vw] min-w-[calc(var(--radix-select-trigger-width)-2px)]',
          // heights
          'max-h-(--radix-select-content-available-height)',
          // background color
          'bg-main',
          // text color
          'text-cnt-primary',
          // border color
          'border-brd-control',
          // transition
          'will-change-[transform,opacity]',
          // "data-[state=open]:animate-slide-down-and-fade",
          'data-[state=closed]:animate-hide',
          'data-[side=bottom]:animate-slide-down-and-fade data-[side=left]:animate-slide-left-and-fade data-[side=right]:animate-slide-right-and-fade data-[side=top]:animate-slide-up-and-fade',
          className,
        )}
        sideOffset={sideOffset}
        position={position}
        collisionPadding={collisionPadding}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitives.Viewport
          className={cx(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[calc(var(--radix-select-trigger-width))]',
          )}
        >
          {children}
        </SelectPrimitives.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitives.Content>
    </SelectPrimitives.Portal>
  ),
)

SelectContent.displayName = 'SelectContent'

const SelectGroupLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitives.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.Label>
>(({ className, ...props }, forwardedRef) => (
  <SelectPrimitives.Label
    ref={forwardedRef}
    className={cx(
      // base
      'px-3 py-2 text-xs font-medium tracking-wide',
      // text color
      'text-gray-500 dark:text-gray-500',
      className,
    )}
    {...props}
  />
))

SelectGroupLabel.displayName = 'SelectGroupLabel'

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.Item>
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <SelectPrimitives.Item
      ref={forwardedRef}
      className={cx(
        // base
        'grid cursor-pointer grid-cols-[1fr_20px] gap-x-2 rounded-sm px-3 py-2 outline-hidden transition-colors data-[state=checked]:font-semibold sm:text-sm',
        // text color
        'text-cnt-primary',
        // disabled
        'data-disabled:pointer-events-none data-disabled:text-gray-400 data-disabled:hover:bg-none dark:data-disabled:text-gray-600',
        // focus
        'focus-visible:bg-gray-4',
        // hover
        'hover:bg-3',
        className,
      )}
      {...props}
    >
      <SelectPrimitives.ItemText className="flex-1 truncate">{children}</SelectPrimitives.ItemText>
      <SelectPrimitives.ItemIndicator>
        <RiCheckLine
          className="size-5 shrink-0 text-gray-800 dark:text-gray-200"
          aria-hidden="true"
        />
      </SelectPrimitives.ItemIndicator>
    </SelectPrimitives.Item>
  )
})

SelectItem.displayName = 'SelectItem'

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitives.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.Separator>
>(({ className, ...props }, forwardedRef) => (
  <SelectPrimitives.Separator
    ref={forwardedRef}
    className={cx(
      // base
      '-mx-1 my-1 h-px',
      // background color
      'bg-gray-300 dark:bg-gray-700',
      className,
    )}
    {...props}
  />
))

SelectSeparator.displayName = 'SelectSeparator'

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
