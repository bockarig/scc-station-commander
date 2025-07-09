import { useEffect, useState } from 'react'

/**
 * A React hook for responsive design that detects device type and window dimensions
 *
 * Uses CSS media queries to categorize the current viewport into device types:
 * - Mobile: ≤ 640px width
 * - Tablet: 641px - 1024px width
 * - Desktop: > 1024px width
 *
 * Automatically updates when the window is resized, making it perfect for responsive
 * components that need to adapt their behavior based on screen size.
 *
 * @returns Object containing device information and convenience flags
 * @returns device - Current device type ('mobile' | 'tablet' | 'desktop' | null)
 * @returns width - Current window width in pixels
 * @returns height - Current window height in pixels
 * @returns isMobile - Boolean flag indicating if current device is mobile
 * @returns isTablet - Boolean flag indicating if current device is tablet
 * @returns isDesktop - Boolean flag indicating if current device is desktop
 *
 * @example
 * ```tsx
 * const ResponsiveComponent = () => {
 *   const { device, width, isMobile, isDesktop } = useMediaQuery()
 *
 *   return (
 *     <div>
 *       <p>Device: {device}</p>
 *       <p>Width: {width}px</p>
 *       {isMobile && <MobileNavigation />}
 *       {isDesktop && <DesktopSidebar />}
 *     </div>
 *   )
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Conditional rendering based on device
 * const ImageGallery = () => {
 *   const { isMobile, isTablet } = useMediaQuery()
 *
 *   const columns = isMobile ? 1 : isTablet ? 2 : 3
 *
 *   return (
 *     <div className={`grid grid-cols-${columns} gap-4`}>
 *       {images.map(img => <img key={img.id} src={img.url} />)}
 *     </div>
 *   )
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Dynamic styles based on viewport
 * const Hero = () => {
 *   const { width, height } = useMediaQuery()
 *
 *   return (
 *     <div
 *       style={{
 *         minHeight: height ? height * 0.8 : '80vh',
 *         fontSize: width && width < 640 ? '1.5rem' : '2rem'
 *       }}
 *     >
 *       Hero Content
 *     </div>
 *   )
 * }
 * ```
 */
export default function useMediaQuery() {
  // Device type state based on screen width breakpoints
  const [device, setDevice] = useState<'mobile' | 'tablet' | 'desktop' | null>(null)

  // Current window dimensions
  const [dimensions, setDimensions] = useState<{
    width: number
    height: number
  } | null>(null)

  useEffect(() => {
    /**
     * Determines device type based on current window width using media queries
     * Updates both device type and window dimensions
     */
    const checkDevice = () => {
      // Mobile: screens up to 640px wide (Tailwind's 'sm' breakpoint)
      if (window.matchMedia('(max-width: 640px)').matches) {
        setDevice('mobile')
      }
      // Tablet: screens between 641px and 1024px wide (Tailwind's 'md' to 'lg')
      else if (window.matchMedia('(min-width: 641px) and (max-width: 1024px)').matches) {
        setDevice('tablet')
      }
      // Desktop: screens wider than 1024px (Tailwind's 'xl' and above)
      else {
        setDevice('desktop')
      }

      // Update current window dimensions
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }

    // Initial detection on mount
    checkDevice()

    // Add listener for window resize events to update device type dynamically
    window.addEventListener('resize', checkDevice)

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', checkDevice)
    }
  }, [])

  // Return comprehensive device and dimension information with convenience flags
  return {
    device,
    width: dimensions?.width,
    height: dimensions?.height,
    isMobile: device === 'mobile',
    isTablet: device === 'tablet',
    isDesktop: device === 'desktop',
  }
}
