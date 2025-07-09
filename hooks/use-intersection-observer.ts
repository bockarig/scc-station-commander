import { RefObject, useEffect, useState } from 'react'

/**
 * Configuration options for the useIntersectionObserver hook
 * Extends the native IntersectionObserverInit interface with additional functionality
 */
interface Args extends IntersectionObserverInit {
  /**
   * If true, stops observing the element once it becomes visible for the first time
   * Useful for performance optimization when you only care about the first intersection
   */
  freezeOnceVisible?: boolean
}

/**
 * A React hook that wraps the Intersection Observer API to detect when an element
 * enters or exits the viewport or a specified root element
 *
 * @param elementRef - React ref object pointing to the DOM element to observe
 * @param options - Configuration object for the intersection observer
 * @param options.threshold - Number between 0-1 indicating how much of the element should be visible to trigger (default: 0)
 * @param options.root - Element used as viewport for checking visibility (default: null = browser viewport)
 * @param options.rootMargin - Margin around the root element, similar to CSS margin (default: '0%')
 * @param options.freezeOnceVisible - Stop observing after element becomes visible once (default: false)
 * @returns IntersectionObserverEntry object containing visibility information, or undefined if not intersecting
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const ref = useRef<HTMLDivElement>(null)
 *   const entry = useIntersectionObserver(ref, { threshold: 0.5 })
 *   const isVisible = !!entry?.isIntersecting
 *
 *   return (
 *     <div ref={ref}>
 *       {isVisible ? 'Element is visible!' : 'Element is hidden'}
 *     </div>
 *   )
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Lazy loading with freeze once visible
 * const LazyImage = ({ src, alt }) => {
 *   const ref = useRef<HTMLImageElement>(null)
 *   const entry = useIntersectionObserver(ref, {
 *     threshold: 0.1,
 *     freezeOnceVisible: true
 *   })
 *   const isVisible = !!entry?.isIntersecting
 *
 *   return <img ref={ref} src={isVisible ? src : undefined} alt={alt} />
 * }
 * ```
 */
function useIntersectionObserver(
  elementRef: RefObject<Element>,
  { threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false }: Args,
): IntersectionObserverEntry | undefined {
  // State to store the current intersection entry
  const [entry, setEntry] = useState<IntersectionObserverEntry>()

  // Check if we should freeze observation (element is visible and freezeOnceVisible is true)
  const frozen = entry?.isIntersecting && freezeOnceVisible

  /**
   * Callback function for the IntersectionObserver
   * Updates the entry state with the latest intersection information
   */
  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry)
  }

  useEffect(() => {
    const node = elementRef?.current // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver

    // Early return if conditions aren't met for observation
    if (!hasIOSupport || frozen || !node) return

    // Configure the intersection observer with provided options
    const observerParams = { threshold, root, rootMargin }
    const observer = new IntersectionObserver(updateEntry, observerParams)

    // Start observing the target element
    observer.observe(node)

    // Cleanup function to disconnect observer when component unmounts or dependencies change
    return () => observer.disconnect()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, root, rootMargin, frozen])

  return entry
}

export default useIntersectionObserver
