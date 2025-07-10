import React from 'react'
import { cx } from '@/utils'
import * as LabelPrimitives from '@radix-ui/react-label'

interface LabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitives.Root> {
  disabled?: boolean
}

const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitives.Root>, LabelProps>(
  ({ className, disabled, ...props }, forwardedRef) => (
    <LabelPrimitives.Root
      ref={forwardedRef}
      className={cx(
        // base
        'text-sm leading-none',
        // text color
        'text-cnt-primary',
        // disabled
        {
          'text-gray-9': disabled,
        },
        className,
      )}
      aria-disabled={disabled}
      tremor-id="tremor-raw"
      {...props}
    />
  ),
)

Label.displayName = 'Label'

export { Label }
