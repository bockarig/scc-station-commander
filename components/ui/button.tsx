// Tremor Button [v1.0.0]

import React from 'react'
import { control, cx, focusRing } from '@/utils'
import { Slot } from '@radix-ui/react-slot'
import { RiLoader2Fill } from '@remixicon/react'
import { tv, type VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: [
    // base
    control,
    'relative inline-flex items-center justify-center border whitespace-nowrap',
    'text-center text-base/6 font-semibold shadow-sm [--tw-shadow-color:var(--color-black-a3)]',
    // disabled
    'disabled:pointer-events-none disabled:shadow-none',
    // focus
    focusRing,
  ],
  variants: {
    variant: {
      primary: [
        // border
        'border-transparent',
        // text color
        'text-accent-contrast',
        // shadow
        '[--tw-shadow-color:var(--color-black-a5)]',
        // background color
        'bg-accent-10',
        // hover color
        'hover:bg-accent-9',
        // disabled
        'disabled:bg-accent-3 disabled:text-white',
      ],
      secondary: [
        // border
        'border-brd-control',
        // text color
        'text-cnt-primary',
        // background color
        'bg-main',
        //hover color
        'hover:bg-gray-4',
        // disabled
        'disabled:text-gray-400',
        'dark:disabled:text-gray-600',
      ],
      light: [
        // base
        'shadow-none',
        // border
        'border-transparent',
        // text color
        'text-gray-900 dark:text-gray-50',
        // background color
        'bg-gray-200 dark:bg-gray-900',
        // hover color
        'hover:bg-gray-300/70 dark:hover:bg-gray-800/80',
        // disabled
        'disabled:bg-gray-100 disabled:text-gray-400',
        'dark:disabled:bg-gray-800 dark:disabled:text-gray-600',
      ],
      ghost: [
        // base
        'shadow-none',
        // border
        'border-transparent',
        // text color
        'text-cnt-primary',
        // hover color
        'hover:bg-gray-4 bg-transparent',
        // disabled
        'disabled:text-gray-400',
        'dark:disabled:text-gray-600',
      ],
      danger: [
        // text color
        'text-(--red-contrast)',
        // border
        'border-transparent',
        // shadow
        '[--tw-shadow-color:var(--color-black-a5)]',
        // background color
        'bg-(--red-10)',
        // hover color
        'hover:bg-(--red-9)',
        // disabled
        'disabled:bg-red-300 disabled:text-white',
        'dark:disabled:bg-red-950 dark:disabled:text-red-400',
      ],
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

interface ButtonProps
  extends React.ComponentPropsWithoutRef<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
  loadingText?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      isLoading = false,
      loadingText,
      className,
      disabled,
      variant,
      children,
      ...props
    }: ButtonProps,
    forwardedRef,
  ) => {
    const Component = asChild ? Slot : 'button'
    return (
      <Component
        ref={forwardedRef}
        className={cx(buttonVariants({ variant }), className)}
        disabled={disabled || isLoading}
        tremor-id="tremor-raw"
        {...props}
      >
        {isLoading ? (
          <span className="pointer-events-none flex shrink-0 items-center justify-center gap-1.5">
            <RiLoader2Fill className="size-4 shrink-0 animate-spin" aria-hidden="true" />
            <span className="sr-only">{loadingText ? loadingText : 'Loading'}</span>
            {loadingText ? loadingText : children}
          </span>
        ) : (
          children
        )}
      </Component>
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants, type ButtonProps }
