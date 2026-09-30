import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  background: ${(p) => p.theme.colors.warmIvory};
`;

export const Content = styled.div`
  padding-top: ${(p) => p.theme.spacing.sectionTop}px;
  padding-bottom: ${(p) => p.theme.spacing.sectionBottom}px;

  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(p) => p.theme.spacing.xl}px;

  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
    align-items: stretch;
    width: 100%;
    margin-right: 0;
    gap: 0;
  }
`;

export const Photo = styled.img`
  display: block;
  width: 100%;
  height: 360px;
  object-fit: cover;
  object-position: center;
  border-radius: 0;
  box-shadow: none;

  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    height: 100%;
    min-height: 520px;
    max-height: 100%;
    margin: 0;
    transform: translateX(0);
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
  background: ${(p) => p.theme.colors.warmOak};
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
