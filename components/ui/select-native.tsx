import React from 'react'
import { cx, focusInput, hasErrorInput } from '@/utils'
import { tv, type VariantProps } from 'tailwind-variants'

const selectNativeStyles = tv({
  base: [
    // base
    'peer h-8 w-full cursor-pointer appearance-none truncate rounded-md border py-0.5 pr-7 pl-3 shadow-xs [--tw-shadow-color:var(--color-black-a4)] outline-hidden sm:text-sm',
    // background color
    'bg-main',
    // border color
    'border-brd-control',
    // text color
    'text-cnt-primary',
    // placeholder color
    'placeholder-cnt-tertiary',
    // hover
    'hover:bg-gray-4',
    // disabled
    'disabled:pointer-events-none',
    'disabled:bg-gray-100 disabled:text-gray-400',
    'dark:disabled:border-gray-700 dark:disabled:bg-gray-800 dark:disabled:text-gray-500',
    // focus
    focusInput,
    // invalid (optional)
    // "dark:aria-invalid:ring-red-400/20 aria-invalid:ring-2 aria-invalid:ring-red-200 aria-invalid:border-red-500 invalid:ring-2 invalid:ring-red-200 invalid:border-red-500"
  ],
  variants: {
    hasError: {
      true: hasErrorInput,
    },
  },
})

interface SelectNativeProps
  extends React.InputHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof selectNativeStyles> {}

const SelectNative = React.forwardRef<HTMLSelectElement, SelectNativeProps>(
  ({ className, hasError, ...props }: SelectNativeProps, forwardedRef) => {
    return (
      <select
        ref={forwardedRef}
        className={cx(selectNativeStyles({ hasError }), className)}
        tremor-id="tremor-raw"
        {...props}
      />
    )
  },
)

SelectNative.displayName = 'SelectNative'

export { SelectNative, selectNativeStyles, type SelectNativeProps }
