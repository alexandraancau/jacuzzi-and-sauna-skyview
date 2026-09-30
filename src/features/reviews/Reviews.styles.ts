import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  background: ${(p) => p.theme.colors.warmIvory};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-top: ${(p) => p.theme.spacing.sectionTop}px;
  padding-bottom: ${(p) => p.theme.spacing.sectionBottom}px;
  box-sizing: border-box;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin: 0 auto 28px;

  @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const EyebrowRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: ${(p) => p.theme.spacing.md}px;
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
  max-width: 620px;
  font-family: ${(p) => p.theme.typography.headingFontFamily};
  font-size: clamp(3rem, 5vw, 5rem);
  line-height: 0.9;
  letter-spacing: -0.06em;
  color: ${(p) => p.theme.colors.deepGraphite};
  font-weight: ${(p) => p.theme.typography.fontWeights.regular};
`;

export const Summary = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 18px;
  min-width: 260px;

  @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
    justify-content: flex-start;
    margin-top: 18px;
  }
`;

export const RatingValue = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  font-family: ${(p) => p.theme.typography.headingFontFamily};
  font-size: clamp(2.5rem, 3vw, 4rem);
  line-height: 1;
  letter-spacing: -0.05em;
  color: ${(p) => p.theme.colors.deepGraphite};
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${(p) => p.theme.colors.warmOak};
  font-size: 1.1rem;
`;

export const SummaryText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  line-height: 1.4;
  color: ${(p) => p.theme.colors.deepGraphite};
  opacity: 0.8;
  font-family: ${(p) => p.theme.typography.fontFamily};
`;

export const SummaryNote = styled.div`
  margin-top: 8px;
  font-size: 0.72rem;
  line-height: 1.5;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.signaturePlum};
`;

export const Carousel = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  max-width: 1280px;
`;

export const CarouselViewport = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const Track = styled.div`
  display: flex;
  transition: transform 220ms ease;
  will-change: transform;
`;

export const Slide = styled.div`
  flex: 0 0 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  align-items: stretch;
  box-sizing: border-box;

  @media (max-width: ${(p) => p.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: rgba(255, 255, 255, 0.28);
  border: 1px solid rgba(122, 98, 116, 0.14);
  border-radius: 18px;
  overflow: hidden;
  min-height: 100%;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: ${(p) => p.theme.colors.surface};

  @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
    height: 200px;
  }
`;

export const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px 16px;
`;

export const QuoteRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

export const CardStars = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1rem;
  color: ${(p) => p.theme.colors.warmOak};
`;

export const ReviewText = styled.p`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.6;
  color: ${(p) => p.theme.colors.deepGraphite};
`;

export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 22px;
  padding-top: 16px;
  border-top: 1px solid rgba(122, 98, 116, 0.12);
`;

export const AuthorWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Initials = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(122, 98, 116, 0.12);
  color: ${(p) => p.theme.colors.signaturePlum};
  font-size: 0.72rem;
  font-weight: ${(p) => p.theme.typography.fontWeights.semibold};
  letter-spacing: 0.06em;
`;

export const Author = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const AuthorName = styled.span`
  font-size: 0.95rem;
  line-height: 1.3;
  font-weight: ${(p) => p.theme.typography.fontWeights.semibold};
  color: ${(p) => p.theme.colors.deepGraphite};
`;

export const AuthorCountry = styled.span`
  font-size: 0.78rem;
  line-height: 1.3;
  color: ${(p) => p.theme.colors.deepGraphite};
  opacity: 0.7;
`;

export const ReviewDate = styled.span`
  font-size: 0.78rem;
  line-height: 1.3;
  color: ${(p) => p.theme.colors.deepGraphite};
  opacity: 0.7;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin: 28px auto 0;
  max-width: 1280px;
`;

export const NavButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid rgba(122, 98, 116, 0.28);
  background: transparent;
  color: ${(p) => p.theme.colors.signaturePlum};
  cursor: pointer;
  transition: background 150ms ease, transform 150ms ease;

  &:hover {
    background: rgba(122, 98, 116, 0.05);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const Dots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Dot = styled.button<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  padding: 0;
  border-radius: 50%;
  border: none;
  background: ${(p) => (p.$active ? p.theme.colors.signaturePlum : 'rgba(122, 98, 116, 0.32)')};
  cursor: pointer;
  transition: background 150ms ease, transform 150ms ease;

  &:hover {
    transform: scale(1.08);
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 28px;
`;

export const PlaceholderNotice = styled.p`
  margin: 0;
  font-size: 0.7rem;
  line-height: 1.5;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.signaturePlum};
`;
