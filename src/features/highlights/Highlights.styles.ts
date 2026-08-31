import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  background: ${(p) => p.theme.colors.surface};
  /* compact strip: modest vertical padding so it sits closely under the hero */
  padding-top: ${(p) => p.theme.spacing.md}px;
  padding-bottom: ${(p) => p.theme.spacing.md}px;
`;

export const IntroRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing.md}px;
  margin-bottom: ${(p) => p.theme.spacing.xl}px;
`;

export const Heading = styled.h2`
  margin: 0;
  font-size: ${(p) => p.theme.typography.headings.h3.size}px;
  font-weight: ${(p) => p.theme.typography.headings.h3.weight};
  color: ${(p) => p.theme.colors.deepGraphite};
`;

export const Intro = styled.p`
  margin: 0;
  color: ${(p) => p.theme.colors.textMuted};
  font-size: ${(p) => p.theme.typography.fontSizes.md}px;
  line-height: ${(p) => p.theme.typography.lineHeights.relaxed};
`;

export const Grid = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* mobile: 2x2 */
  gap: 0;
  align-items: center;

  /* subtle mobile separators: horizontal between rows and vertical between columns */
  & > li:nth-of-type(n + 3) {
    border-top: 1px solid ${(p) => p.theme.colors.border};
  }

  & > li:nth-of-type(2n) {
    border-left: 1px solid ${(p) => p.theme.colors.border};
  }

  @media (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);

    /* remove mobile borders on items */
    & > li {
      border-top: none;
      border-left: none;
      /* ensure no other visual outlines remain on desktop */
      border: none;
      outline: none;
      box-shadow: none;
    }

    /* explicitly override the mobile nth-of-type separators to be safe */
    & > li:nth-of-type(n + 3),
    & > li:nth-of-type(2n) {
      border-top: none;
      border-left: none;
    }

    /* Single source of truth for the three vertical dividers between columns.
       Use multiple background layers positioned at 25%, 50%, 75% to draw
       identical vertical separators centered between columns. */
    position: relative;
    background-image:
      linear-gradient(${(p) => p.theme.colors.border}, ${(p) => p.theme.colors.border}),
      linear-gradient(${(p) => p.theme.colors.border}, ${(p) => p.theme.colors.border}),
      linear-gradient(${(p) => p.theme.colors.border}, ${(p) => p.theme.colors.border});
    background-repeat: no-repeat;
    background-position: 25% 50%, 50% 50%, 75% 50%;
    background-size: 1px 56%, 1px 56%, 1px 56%;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(p) => p.theme.spacing.sm}px;
  padding: ${(p) => p.theme.spacing.md}px ${(p) => p.theme.spacing.md}px;
  box-sizing: border-box;

  text-align: center;

  @media (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    padding: ${(p) => p.theme.spacing.lg}px ${(p) => p.theme.spacing.md}px;
  }
  position: relative;
`;

export const IconWrap = styled.div`
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.colors.signaturePlum};
  margin-bottom: ${(p) => p.theme.spacing.xs}px;
  & img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }
`;

export const ItemContent = styled.div``;

export const ItemTitle = styled.h3`
  margin: 0;
  font-size: ${(p) => p.theme.typography.fontSizes.sm}px;
  font-weight: ${(p) => p.theme.typography.fontWeights.medium};
  color: ${(p) => p.theme.colors.deepGraphite};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const ItemText = styled.p`
  margin: 0;
  font-size: ${(p) => p.theme.typography.fontSizes.xs}px;
  color: ${(p) => p.theme.colors.textMuted};
`;

export default {};
