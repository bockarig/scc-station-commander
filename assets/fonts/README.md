# Local Sora Font Setup

This directory contains the local Sora font files used in the project instead of the Fontsource package.

## Font Files

### Variable Font

- `Sora/Sora-VariableFont_wght.ttf` - The variable font file supporting weights 100-800

### Static Fonts (Fallbacks)

Located in `Sora/static/`:

- `Sora-Thin.ttf` (100)
- `Sora-ExtraLight.ttf` (200)
- `Sora-Light.ttf` (300)
- `Sora-Regular.ttf` (400)
- `Sora-Medium.ttf` (500)
- `Sora-SemiBold.ttf` (600)
- `Sora-Bold.ttf` (700)
- `Sora-ExtraBold.ttf` (800)

## Configuration

The fonts are configured in `assets/css/tokens/fonts.css` with:

1. **@font-face declarations** for both variable and static fonts
2. **Tailwind v4 theme variables** using the `@theme` directive
3. **Fallback chain** that gracefully degrades from variable → static → system fonts

## Usage

```html
<!-- Font families available -->
<h1 class="font-sora">Direct Sora reference</h1>
<h2 class="font-sans">Default sans (Sora)</h2>
<h3 class="font-display">Display font (Sora)</h3>

<!-- All font weights work smoothly -->
<p class="font-thin">Thin (100)</p>
<p class="font-medium">Medium (500)</p>
<p class="font-extrabold">Extra Bold (800)</p>
```

## Benefits of Local Fonts

1. **No external dependencies** - Fonts load instantly without network requests
2. **Privacy** - No tracking from font CDNs
3. **Reliability** - Works offline and in restricted networks
4. **Performance** - Faster load times and reduced FOIT/FOUT
5. **Version control** - Font files are versioned with your code

## Testing

Use the `FontTest` component to verify the font setup:

```tsx
import FontTest from '@/components/font-test'

// Shows all font variations and weights
;<FontTest />
```

## Browser Support

- **Modern browsers**: Use the variable font for smooth weight transitions
- **Older browsers**: Fall back to static fonts automatically
- **No font support**: Fall back to system fonts gracefully

## License

Sora is licensed under the SIL Open Font License 1.1. See `Sora/OFL.txt` for full license text.
