# SkyView Typography

Fonts
- `Playfair Display` — editorial / display font (used for large headlines and emotionally-led brand moments)
- `Inter` — functional / UI font (used for body copy, navigation, buttons, labels)

Both fonts are loaded via `@fontsource` in `src/main.tsx`. Do not add Google Fonts or include local font files — `@fontsource` is the source of truth.

Where fonts are loaded
- `src/main.tsx` imports selected weights from `@fontsource/playfair-display` and `@fontsource/inter`.

Theme tokens
- `src/theme/typography.ts` exposes the following tokens:
	- `typography.fontFamily` — legacy / body family string (Inter)
	- `typography.headingFontFamily` — legacy heading family string (Playfair Display)
	- `typography.fontFamilies.body` — explicit body font-family (Inter)
	- `typography.fontFamilies.display` — explicit display font-family (Playfair Display)
	- `typography.fontSizes`, `fontWeights`, `lineHeights`, and `headings` control sizes and weights.

Guidelines
- Use `typography.fontFamilies.display` (Playfair Display) for:
	- Hero headline
	- Major editorial headings
	- Large section headings

- Use `typography.fontFamilies.body` (Inter) for:
	- Body copy
	- Navigation
	- Buttons
	- Eyebrow labels and feature labels
	- Supporting text and functional UI

Implementation notes
- Global body font-family is applied via Emotion `Global` in `src/main.tsx`, using `theme.typography.fontFamilies.body` if available.
- Component-level font-family overrides should reference `theme.typography.headingFontFamily` or `theme.typography.fontFamilies.display` when they need Playfair Display.
- Existing component font declarations were not broadly changed to avoid visual regressions; components already using theme tokens remain consistent.

`src/assets/fonts`
- This folder is currently empty and not required because fonts are provided by `@fontsource`. It can be removed safely.

If you want, I can further refactor components to consistently reference `theme.typography.fontFamilies.*` everywhere, but I've preserved existing tokens for compatibility.
