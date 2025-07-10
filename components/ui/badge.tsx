import React from 'react'
import { cx } from '@/utils'
import { tv, type VariantProps } from 'tailwind-variants'

const badgeVariants = tv({
  base: cx(
    'inline-flex items-center gap-x-1 rounded-md px-2 py-1 text-xs font-medium whitespace-nowrap ring-1 ring-inset',
  ),
  variants: {
    variant: {
      default: [
        'bg-accent-4 text-blue-900 ring-blue-500/30',
        'dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30',
      ],
      neutral: ['bg-main text-cnt-primary ring-brd-line'],
      success: [
        'bg-emerald-50 text-emerald-900 ring-emerald-600/30',
        'dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-emerald-400/20',
      ],
      error: [
        'bg-red-50 text-red-900 ring-red-600/20',
        'dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/20',
      ],
      warning: [
        'bg-yellow-50 text-yellow-900 ring-yellow-600/30',
        'dark:bg-yellow-400/10 dark:text-yellow-500 dark:ring-yellow-400/20',
      ],
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

interface BadgeProps
  extends React.ComponentPropsWithoutRef<'span'>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }: BadgeProps, forwardedRef) => {
    return (
      <span
        ref={forwardedRef}
        className={cx(badgeVariants({ variant }), className)}
        tremor-id="tremor-raw"
        {...props}
      />
    )
  },
)

Badge.displayName = 'Badge'

export { Badge, badgeVariants, type BadgeProps }
