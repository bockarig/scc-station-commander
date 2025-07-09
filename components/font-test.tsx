import React from 'react'

/**
 * Font Test Component
 * Demonstrates the local Sora Variable Font implementation with Tailwind v4
 * Uses local font files instead of Fontsource package
 */
export const FontTest: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-8 p-8">
      <div className="border-b pb-8 text-center">
        <h1 className="font-display mb-4 text-6xl font-extrabold text-gray-900">
          Sora Variable Font
        </h1>
        <p className="font-sans text-xl font-light text-gray-600">
          Tailwind CSS v4 Typography Demo
        </p>
      </div>

      <section>
        <h2 className="font-display mb-6 text-3xl font-bold text-gray-800">
          Font Family Variations
        </h2>
        <div className="space-y-4 rounded-lg bg-gray-50 p-6">
          <div>
            <span className="font-mono text-sm text-gray-500">font-sora:</span>
            <p className="font-sora text-lg">The quick brown fox jumps over the lazy dog.</p>
          </div>
          <div>
            <span className="font-mono text-sm text-gray-500">font-sans:</span>
            <p className="font-sans text-lg">The quick brown fox jumps over the lazy dog.</p>
          </div>
          <div>
            <span className="font-mono text-sm text-gray-500">font-display:</span>
            <p className="font-display text-lg">The quick brown fox jumps over the lazy dog.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-display mb-6 text-3xl font-bold text-gray-800">Font Weight Scale</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            { weight: 'font-thin', value: '100', label: 'Thin' },
            { weight: 'font-extralight', value: '200', label: 'Extra Light' },
            { weight: 'font-light', value: '300', label: 'Light' },
            { weight: 'font-normal', value: '400', label: 'Normal' },
            { weight: 'font-medium', value: '500', label: 'Medium' },
            { weight: 'font-semibold', value: '600', label: 'Semi Bold' },
            { weight: 'font-bold', value: '700', label: 'Bold' },
            { weight: 'font-extrabold', value: '800', label: 'Extra Bold' },
          ].map(({ weight, value, label }) => (
            <div
              key={weight}
              className="flex items-center justify-between rounded border bg-white p-4"
            >
              <div className="flex items-center space-x-3">
                <span className="w-12 font-mono text-sm text-gray-500">{value}</span>
                <span className="text-sm text-gray-600">{label}</span>
              </div>
              <p className={`font-sora ${weight} text-lg`}>Sora Variable</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display mb-6 text-3xl font-bold text-gray-800">Typography Scale</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-6">
            <h1 className="font-display text-6xl font-extrabold text-gray-900">Heading 1</h1>
            <code className="text-sm text-gray-500">font-display text-6xl font-extrabold</code>
          </div>
          <div className="border-l-4 border-blue-400 pl-6">
            <h2 className="font-display text-4xl font-bold text-gray-800">Heading 2</h2>
            <code className="text-sm text-gray-500">font-display text-4xl font-bold</code>
          </div>
          <div className="border-l-4 border-blue-300 pl-6">
            <h3 className="font-display text-2xl font-semibold text-gray-800">Heading 3</h3>
            <code className="text-sm text-gray-500">font-display text-2xl font-semibold</code>
          </div>
          <div className="border-l-4 border-blue-200 pl-6">
            <p className="font-sans text-lg font-normal text-gray-700">
              Large paragraph text with excellent readability using Sora Variable font.
            </p>
            <code className="text-sm text-gray-500">font-sans text-lg font-normal</code>
          </div>
          <div className="border-l-4 border-gray-300 pl-6">
            <p className="font-sans text-base font-normal text-gray-700">
              Regular paragraph text that maintains perfect legibility across all devices and screen
              sizes.
            </p>
            <code className="text-sm text-gray-500">font-sans text-base font-normal</code>
          </div>
          <div className="border-l-4 border-gray-200 pl-6">
            <p className="font-sans text-sm font-light text-gray-600">
              Small text for captions and secondary information.
            </p>
            <code className="text-sm text-gray-500">font-sans text-sm font-light</code>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-display mb-6 text-3xl font-bold text-gray-800">Real-world Examples</h2>
        <div className="grid gap-6">
          {/* Card Example */}
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="font-display mb-2 text-xl font-bold text-gray-900">Product Card</h3>
            <p className="mb-4 font-sans text-base font-normal text-gray-700">
              This is an example card component showcasing how Sora Variable font looks in a real
              component with multiple text elements.
            </p>
            <div className="flex items-center justify-between">
              <span className="font-sans text-lg font-semibold text-gray-900">$99.99</span>
              <button className="rounded bg-blue-600 px-4 py-2 font-sans text-sm font-medium text-white transition-colors hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Article Example */}
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <article>
              <h3 className="font-display mb-3 text-2xl font-bold text-gray-900">
                Article Headline
              </h3>
              <p className="mb-4 font-sans text-base leading-relaxed font-normal text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sora Variable font provides
                excellent readability for longer content, with optimized line heights and letter
                spacing that reduces eye strain during extended reading sessions.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="font-sans font-medium">John Doe</span>
                <span className="mx-2">•</span>
                <time className="font-sans font-normal">January 15, 2024</time>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FontTest
