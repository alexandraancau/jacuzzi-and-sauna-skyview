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
  width: min(100%, 1280px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  align-items: center;

  @media (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    grid-template-columns: 0.46fr 0.54fr;
    gap: 36px;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const EyebrowRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: ${(p) => p.theme.spacing.sm}px;
`;

export const Eyebrow = styled.p`
  margin: 0;
  font-size: ${(p) => p.theme.typography.fontSizes.xs}px;
  line-height: 1.4;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.signaturePlum};
`;

export const OakLine = styled.span`
  display: block;
  width: 72px;
  height: 1px;
  background: linear-gradient(90deg, rgba(182, 154, 109, 1) 0%, rgba(182, 154, 109, 0.3) 100%);
`;

export const Heading = styled.h2`
  margin: 0;
  display: flex;
  flex-direction: column;
  width: min(100%, 520px);
  font-family: ${(p) => p.theme.typography.headingFontFamily};
  font-size: clamp(2.3rem, 2.9vw, 3.7rem);
  line-height: 0.96;
  letter-spacing: -0.06em;
  color: ${(p) => p.theme.colors.deepGraphite};
  font-weight: ${(p) => p.theme.typography.headings.h2.weight};

  span {
    display: block;
    white-space: nowrap;
  }

  @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
    width: 100%;

    span {
      white-space: normal;
    }
  }
`;

export const Body = styled.p`
  margin: ${(p) => p.theme.spacing.md}px 0 0;
  max-width: 540px;
  font-size: clamp(1.05rem, 1.4vw, 1.3rem);
  line-height: 1.6;
  color: ${(p) => p.theme.colors.deepGraphite};
  opacity: 0.82;
`;

export const FactGrid = styled.div`
  width: 100%;
  margin-top: ${(p) => p.theme.spacing.lg}px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid rgba(122, 98, 116, 0.2);

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const FactItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  min-height: 104px;
  padding: 14px 14px 14px 0;
  border-bottom: 1px solid rgba(122, 98, 116, 0.15);

  &::after {
    content: '';
    position: absolute;
    top: 18px;
    right: 0;
    width: 1px;
    height: calc(100% - 36px);
    background: rgba(122, 98, 116, 0.12);
  }

  &:nth-of-type(odd) {
    padding-right: 14px;
  }

  &:nth-of-type(even) {
    padding-left: 14px;
  }

  &:nth-of-type(2n)::after,
  &:last-of-type::after {
    display: none;
  }

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    min-height: auto;
    &::after {
      display: none;
    }
    &:nth-of-type(even) {
      padding-left: 0;
    }
  }
`;

export const FactIconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${(p) => p.theme.colors.signaturePlum};

  img {
    display: block;
    width: 30px;
    height: 30px;
    object-fit: contain;
  }
`;

export const FactText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  min-width: 0;
`;

export const FactPrimary = styled.span`
  font-size: clamp(1.05rem, 1.4vw, 1.5rem);
  line-height: 1.2;
  font-weight: ${(p) => p.theme.typography.fontWeights.semibold};
  color: ${(p) => p.theme.colors.deepGraphite};
`;

export const FactSecondary = styled.span`
  font-size: 0.95rem;
  line-height: 1.35;
  color: ${(p) => p.theme.colors.deepGraphite};
  opacity: 0.8;
`;

export const FactTertiary = styled.span`
  font-size: 0.9rem;
  line-height: 1.3;
  color: ${(p) => p.theme.colors.textMuted};
`;

export const BookAction = styled.div`
  margin-top: ${(p) => p.theme.spacing.md}px;
`;

export const RightColumn = styled.div`
  display: flex;
  justify-content: center;
`;

export const MapPanel = styled.div`
  position: relative;
  width: min(100%, 720px);
  aspect-ratio: 1.2;
`;

export const MapCanvas = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 2px;
  background:
    radial-gradient(circle at 16% 24%, rgba(143, 167, 152, 0.75) 0%, rgba(143, 167, 152, 0.75) 12%, transparent 13%),
    radial-gradient(circle at 72% 22%, rgba(183, 204, 180, 0.8) 0%, rgba(183, 204, 180, 0.8) 10%, transparent 11%),
    radial-gradient(circle at 78% 68%, rgba(145, 172, 150, 0.82) 0%, rgba(145, 172, 150, 0.82) 12%, transparent 13%),
    linear-gradient(135deg, #e3e8e5 0%, #e9ece6 100%);
  box-shadow: inset 0 0 0 1px rgba(31, 41, 51, 0.04);

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  &::before {
    background-image:
      linear-gradient(120deg, transparent 0 26%, rgba(255,255,255,0.72) 26.2% 26.8%, transparent 27% 100%),
      linear-gradient(38deg, transparent 0 48%, rgba(255,255,255,0.72) 48.2% 48.8%, transparent 49% 100%),
      linear-gradient(75deg, transparent 0 16%, rgba(255,255,255,0.68) 16.2% 16.8%, transparent 17% 100%),
      linear-gradient(92deg, transparent 0 70%, rgba(255,255,255,0.7) 70.2% 70.8%, transparent 71% 100%);
    opacity: 0.9;
  }

  &::after {
    background-image:
      linear-gradient(180deg, rgba(77, 98, 88, 0.08) 0 2px, transparent 2px 100%),
      linear-gradient(90deg, rgba(77, 98, 88, 0.08) 0 2px, transparent 2px 100%);
    background-size: 70px 70px;
    opacity: 0.35;
  }
`;

export const MapMarker = styled.div`
  position: absolute;
  left: 50%;
  top: 52%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 110px;
  border-radius: 50% 50% 50% 0;
  background: ${(p) => p.theme.colors.signaturePlum};
  box-shadow: 0 18px 30px rgba(122, 98, 116, 0.22);
  transform-origin: center;
  rotate: -45deg;

  span,
  small {
    display: block;
    rotate: 45deg;
    text-align: center;
    color: ${(p) => p.theme.colors.warmIvory};
    letter-spacing: 0.04em;
    font-weight: ${(p) => p.theme.typography.fontWeights.semibold};
  }

  span {
    font-size: 0.67rem;
    line-height: 1.1;
  }

  small {
    font-size: 0.5rem;
    line-height: 1.2;
    letter-spacing: 0.15em;
    opacity: 0.95;
  }
`;

export const MapLabel = styled.div`
  position: absolute;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(31, 41, 51, 0.04);
  box-shadow: 0 4px 12px rgba(15, 23, 36, 0.04);
  backdrop-filter: blur(2px);
  color: ${(p) => p.theme.colors.deepGraphite};
  font-size: 0.7rem;
  line-height: 1.3;
  text-align: center;

  &.airport {
    left: 12%;
    top: 10%;
  }

  &.mall {
    right: 12%;
    top: 40%;
  }

  &.centre {
    left: 24%;
    bottom: 18%;
  }
`;

export const MapLabelTitle = styled.span`
  font-weight: ${(p) => p.theme.typography.fontWeights.semibold};
  color: ${(p) => p.theme.colors.deepGraphite};
`;

export default {};
