import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  background: ${(p) => p.theme.colors.warmIvory};
`;

export const Content = styled.div`
  padding-top: ${(p) => p.theme.spacing.sectionTop}px;
  padding-bottom: ${(p) => p.theme.spacing.sectionBottom}px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(p) => p.theme.spacing.xl}px;

  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    /* Give the photo slightly more visual weight on desktop */
    grid-template-columns: 1fr 1.3fr;
    align-items: center;
  }
`;

export const Photo = styled.div<{ $src: string }>`
  width: 100%;
  height: 360px;
  background-image: url(${(p) => p.$src});
  background-size: cover;
  background-position: center;
  border-radius: ${(p) => p.theme.radius.large};
  box-shadow: ${(p) => p.theme.shadows.medium};

  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    /* Taller image on desktop for greater dominance */
    height: 480px;
  }
`;

export const Text = styled.div`
  /* Vertically center text to align closer with image center */
  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    align-self: center;
  }
`;

export const EyebrowRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing.sm}px;
  margin-bottom: ${(p) => p.theme.spacing.sm}px;
`;

export const Eyebrow = styled.p`
  margin: 0;
  font-size: ${(p) => p.theme.typography.fontSizes.sm}px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.signaturePlum};
`;

export const OakLine = styled.span`
  display: block;
  width: 36px;
  height: 3px;
  border-radius: 2px;
  background: #C99A70; /* Warm Oak from design docs */
`;

export const Heading = styled.h2`
  margin: 0 0 ${(p) => p.theme.spacing.md}px;
  font-family: ${(p) => p.theme.typography.headingFontFamily};
  font-size: ${(p) => p.theme.typography.headings.h2.size}px;
  font-weight: ${(p) => p.theme.typography.headings.h2.weight};
  line-height: ${(p) => p.theme.typography.headings.h2.lineHeight};
  color: ${(p) => p.theme.colors.deepGraphite};
`;

export const Body = styled.p`
  margin: 0 0 ${(p) => p.theme.spacing.lg}px;
  color: ${(p) => p.theme.colors.textMuted};
  font-size: ${(p) => p.theme.typography.fontSizes.md}px;
  line-height: ${(p) => p.theme.typography.lineHeights.relaxed};
  max-width: 560px;
`;

export default {};
