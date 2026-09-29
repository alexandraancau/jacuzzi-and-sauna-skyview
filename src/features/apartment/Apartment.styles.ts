import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  background: ${(p) => p.theme.colors.warmIvory};
`;

export const Content = styled.div`
  padding-top: ${(p) => p.theme.spacing.sectionTop}px;
  padding-bottom: ${(p) => p.theme.spacing.sectionBottom}px;
`;

export const Intro = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

export const Eyebrow = styled.p`
  margin: 0;
  font-size: ${(p) => p.theme.typography.fontSizes.xs}px;
  line-height: 1.4;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.signaturePlum};
`;

export const Divider = styled.div`
  width: 120px;
  height: 1px;
  margin: ${(p) => p.theme.spacing.md}px auto 0;
  background: linear-gradient(90deg, rgba(182, 154, 109, 0) 0%, rgba(182, 154, 109, 1) 50%, rgba(182, 154, 109, 0) 100%);
`;

export const Heading = styled.h2`
  margin: ${(p) => p.theme.spacing.xl}px auto ${(p) => p.theme.spacing.lg}px;
  max-width: 1100px;
  font-family: ${(p) => p.theme.typography.headingFontFamily};
  font-size: clamp(3rem, 5vw, 7rem);
  line-height: 0.95;
  letter-spacing: -0.065em;
  font-weight: ${(p) => p.theme.typography.headings.h2.weight};
  color: ${(p) => p.theme.colors.deepGraphite};
`;

export const Body = styled.p`
  max-width: 760px;
  margin: 0 auto;
  font-size: clamp(1.05rem, 1.5vw, 1.55rem);
  line-height: 1.6;
  color: ${(p) => p.theme.colors.deepGraphite};
  opacity: 0.8;
`;

export const AmenityGrid = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${(p) => p.theme.spacing.xxl}px auto 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  max-width: 1200px;

  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`;

export const AmenityItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  min-height: 180px;
  padding: ${(p) => p.theme.spacing.lg}px ${(p) => p.theme.spacing.sm}px ${(p) => p.theme.spacing.lg}px;
  text-align: center;

  &:not(:last-of-type)::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -1px;
    width: 1px;
    height: 150px;
    transform: translateY(-50%);
    background: rgba(122, 98, 116, 0.18);
  }

  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    min-height: 200px;
    gap: 16px;
  }

  @media (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    min-height: 170px;
    padding-top: ${(p) => p.theme.spacing.lg}px;
    padding-bottom: ${(p) => p.theme.spacing.lg}px;

    &:not(:last-of-type)::after {
      height: 160px;
    }
  }
`;

export const AmenityIcon = styled.img`
  width: 46px;
  height: 46px;
  display: block;
  object-fit: contain;
  flex-shrink: 0;
  margin-bottom: 0;

  @media (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    width: 48px;
    height: 48px;
  }
`;

export const AmenityTitle = styled.h3`
  margin: 0;
  font-size: clamp(1.05rem, 1.2vw, 1.4rem);
  line-height: 1.25;
  letter-spacing: -0.03em;
  font-weight: ${(p) => p.theme.typography.fontWeights.semibold};
  color: ${(p) => p.theme.colors.deepGraphite};
  text-align: center;
  white-space: normal;

  @media (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    &[data-amenity='kitchen'] {
      white-space: nowrap;
    }
  }
`;

export const AmenityText = styled.p`
  margin: 0;
  font-size: clamp(0.95rem, 0.9vw, 1.1rem);
  line-height: 1.5;
  color: ${(p) => p.theme.colors.textMuted};
  text-align: center;
`;

export const GallerySection = styled.div`
  width: min(100%, 1280px);
  margin: ${(p) => p.theme.spacing.xxl}px auto 0;
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  align-items: stretch;
`;

export const GalleryFeature = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  aspect-ratio: 16 / 7;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: ${(p) => p.theme.shadows.small};

  @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
    aspect-ratio: 4 / 3;
  }
`;

export const GalleryStack = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
`;

export const GalleryCard = styled.div`
  width: 100%;
  aspect-ratio: 4 / 2.35;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: ${(p) => p.theme.shadows.small};

  @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
    aspect-ratio: 4 / 3;
  }
`;

export const GalleryImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  background: ${(p) => p.theme.colors.surface};
`;

export const GalleryAction = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(p) => p.theme.spacing.lg}px;
`;

export default {};
