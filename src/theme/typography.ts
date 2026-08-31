// Typography tokens tuned for calm, readable UI
export const typography = {
  // Body UI font (Inter) — imported via @fontsource
  fontFamily:
    "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  // Heading font (Playfair Display) — imported via @fontsource
  headingFontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 28,
    xxl: 40,
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    normal: 1.5,
    relaxed: 1.65,
    tight: 1.25,
  },
  headings: {
    h1: { size: 40, weight: 700, lineHeight: 1.05 },
    h2: { size: 32, weight: 600, lineHeight: 1.1 },
    h3: { size: 24, weight: 600, lineHeight: 1.2 },
    h4: { size: 20, weight: 600, lineHeight: 1.25 },
  },
};

export default typography;
