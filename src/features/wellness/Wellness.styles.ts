import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  background: ${(p) => p.theme.colors.warmIvory};
`;

export const Content = styled.div`
  padding-top: ${(p) => p.theme.spacing.sectionTop}px;
  padding-bottom: ${(p) => p.theme.spacing.sectionBottom}px;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: ${(p) => p.theme.spacing.xxl}px;
`;

export const Heading = styled.h2`
  margin: 0;
  font-family: ${(p) => p.theme.typography.headingFontFamily};
  font-size: clamp(2.2rem, 3vw, 4rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
  font-weight: ${(p) => p.theme.typography.headings.h2.weight};
  color: ${(p) => p.theme.colors.deepGraphite};
`;

export const ItalicWord = styled.span`
  font-family: 'Playfair Display', Georgia, serif;
  font-style: italic;
  font-weight: 400;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(p) => p.theme.spacing.xl}px;

  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const Card = styled.article`
  position: relative;
  min-height: 560px;
  overflow: hidden;
  background: ${(p) => p.theme.colors.deepGraphite};
  border-radius: 0;

  @media (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    min-height: 620px;
  }
`;

export const CardImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(1.01);
`;

export const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(15, 15, 15, 0.06) 0%,
    rgba(15, 15, 15, 0.2) 35%,
    rgba(15, 15, 15, 0.72) 100%
  );
`;

export const CardBody = styled.div`
  position: absolute;
  left: ${(p) => p.theme.spacing.lg}px;
  right: ${(p) => p.theme.spacing.lg}px;
  bottom: ${(p) => p.theme.spacing.lg}px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing.xs}px;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: ${(p) => p.theme.typography.fontSizes.sm}px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: ${(p) => p.theme.typography.fontWeights.semibold};
  color: ${(p) => p.theme.colors.white};
`;

export const CardText = styled.p`
  margin: 0;
  font-size: ${(p) => p.theme.typography.fontSizes.sm}px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.84);
`;

export default {};
