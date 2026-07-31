import styled from '@emotion/styled';

export interface StyledHeroSectionProps {
  $backgroundImage: string;
}

export const StyledHeroSection = styled.section<StyledHeroSectionProps>`
  width: 100%;
  background-image: url(${(p) => p.$backgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.32);
  position: absolute;
  inset: 0;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 520px;
  color: ${({ theme }) => theme.colors.white};
  padding-top: ${({ theme }) => theme.spacing.xl}px;
  padding-bottom: ${({ theme }) => theme.spacing.xl}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: ${({ theme }) => theme.spacing.xxl}px;
    padding-bottom: ${({ theme }) => theme.spacing.xxl}px;
  }
`;

export const HeroHeading = styled.h1`
  margin: 0 0 ${({ theme }) => theme.spacing.md}px;
  font-size: ${({ theme }) => theme.typography.fontSizes.xxl}px;
  line-height: 1.05;
`;

export const HeroText = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.lg}px;
  max-width: 720px;
  font-size: ${({ theme }) => theme.typography.fontSizes.md}px;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;
