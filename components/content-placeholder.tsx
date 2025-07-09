import { cx } from '@/utils'

export interface ContentPlaceholderProps {
  className?: string
}
export const ContentPlaceholder = ({ className }: ContentPlaceholderProps) => (
  <div className={cx('bg-gray-3 relative h-full overflow-hidden rounded', className)}>
    <svg className="stroke-brd-line absolute inset-0 h-full w-full" fill="none">
      <defs>
        <pattern id="pattern-3" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
        </pattern>
      </defs>
      <rect stroke="none" fill="url(#pattern-3)" width="100%" height="100%"></rect>
    </svg>
  </div>
)
