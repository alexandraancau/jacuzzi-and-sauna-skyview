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

  /* Rounded top corners to match approved mockup; bottom corners remain square */
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  @media (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    border-top-left-radius: 28px;
    border-top-right-radius: 28px;
    /* Inset the hero from the viewport edges to reveal Warm Ivory background */
    max-width: calc(100% - 48px); /* 24px left + 24px right */
    margin: 10px auto 0; /* ~10px top margin so Header sits inside the Hero */
  }
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
  align-items: flex-start;
  min-height: 70vh;
  color: ${({ theme }) => theme.colors.white};
  padding-top: ${({ theme }) => theme.spacing.xl}px;
  padding-bottom: ${({ theme }) => theme.spacing.xl}px;
  padding-left: ${({ theme }) => theme.spacing.lg}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 80vh;
    padding-top: ${({ theme }) => theme.spacing.xxl}px;
    padding-bottom: ${({ theme }) => theme.spacing.xxl}px;
    padding-left: ${({ theme }) => theme.spacing.xxl}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    /* Slightly reduce desktop hero height for a more cinematic proportion */
    min-height: 76vh;
    /* push content slightly lower inside the hero for better composition */
    padding-top: ${(p) => p.theme.spacing.xxl + 24}px;
    /* nudge content block to the right to match mockup left inset (reduced extra offset
       to move the block slightly left by ~24px to better match mockup) */
    padding-left: calc(${(p) => p.theme.spacing.xxl}px + 48px);
  }
`;

export const HeroHeading = styled.h1`
  margin: 0 0 ${({ theme }) => theme.spacing.lg}px;
  font-family: ${(p) => p.theme.typography.headingFontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.warmIvory};
  font-size: 40px;
  line-height: 1.02;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 72px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    /* Increase desktop headline for stronger visual dominance */
    font-size: 82px;
  }
`;

export const HeroText = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.xl}px;
  max-width: 520px;
  font-size: ${({ theme }) => theme.typography.fontSizes.md}px;
  line-height: 1.6;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    /* Narrow the supporting copy on larger screens for a compact 2-3 line block */
    max-width: 380px;
  }
`;

export const Divider = styled.span`
  display: block;
  width: 28px;
  height: 3px;
  border-radius: 2px;
  background: #E6C7A6; /* Champagne Glow */
  margin: ${({ theme }) => theme.spacing.sm}px 0 ${({ theme }) => theme.spacing.md}px;
`;
