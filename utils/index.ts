import ms from 'ms'

/**
 * Formats a timestamp to show how long ago it occurred
 * @param timestamp - The date to compare against current time
 * @param timeOnly - If true, omits the " ago" suffix from the result
 * @returns A human-readable time difference (e.g., "2h ago" or "2h" if timeOnly is true)
 * @example
 * timeAgo(new Date(Date.now() - 3600000)) // "1h ago"
 * timeAgo(new Date(Date.now() - 3600000), true) // "1h"
 */
export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return 'never'
  return `${ms(Date.now() - new Date(timestamp).getTime())}${timeOnly ? '' : ' ago'}`
}

/**
 * A generic fetch wrapper with built-in error handling
 * @template JSON - The expected response type
 * @param input - The request URL or Request object
 * @param init - Optional request configuration
 * @returns Promise that resolves to the parsed JSON response
 * @throws Error with status code if the request fails or returns an error
 * @example
 * const data = await fetcher<{ users: User[] }>('/api/users')
 */
export async function fetcher<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> {
  const res = await fetch(input, init)

  if (!res.ok) {
    const json = await res.json()
    if (json.error) {
      const error = new Error(json.error) as Error & {
        status: number
      }
      error.status = res.status
      throw error
    } else {
      throw new Error('An unexpected error occurred')
    }
  }

  return res.json()
}

/**
 * Formats large numbers with abbreviated units (K, M, G, T, P, E)
 * @param num - The number to format
 * @param digits - Number of decimal places to show (defaults to 1)
 * @returns Formatted string with appropriate unit suffix
 * @example
 * nFormatter(1234) // "1.2K"
 * nFormatter(1234567) // "1.2M"
 * nFormatter(1234567, 2) // "1.23M"
 */
export function nFormatter(num: number, digits?: number) {
  if (!num) return '0'
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ]
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value
    })
  return item ? (num / item.value).toFixed(digits || 1).replace(rx, '$1') + item.symbol : '0'
}

/**
 * Capitalizes the first letter of a string
 * @param str - The string to capitalize
 * @returns String with first letter capitalized, or original value if not a valid string
 * @example
 * capitalize("hello world") // "Hello world"
 * capitalize("") // ""
 */
export function capitalize(str: string) {
  if (!str || typeof str !== 'string') return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Truncates a string to a specified length and adds ellipsis if truncated
 * @param str - The string to truncate
 * @param length - Maximum length before truncation
 * @returns Truncated string with "..." appended, or original string if within length
 * @example
 * truncate("This is a long string", 10) // "This is a ..."
 * truncate("Short", 10) // "Short"
 */
export const truncate = (str: string, length: number) => {
  if (!str || str.length <= length) return str
  return `${str.slice(0, length)}...`
}

/**
 * @deprecated This re-export is for compatibility with shadcn/tremor ecosystem.
 * Remove once all imports are updated to use `@/lib/style-utils` instead of `@/lib/utils`.
 */
export * from './style-utils'
