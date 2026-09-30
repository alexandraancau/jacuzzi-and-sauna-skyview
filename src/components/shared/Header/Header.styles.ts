import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Wrapper = styled.header`
  width: 100%;
  position: absolute;
  /* Default small offset so header sits inside the hero; increased at larger breakpoints
     to provide 24-32px breathing room from the hero top corner */
  top: ${(p) => p.theme.spacing.sm}px;
  left: 0;
  z-index: 10;
  background: transparent;

  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    top: ${(p) => p.theme.spacing.lg}px; /* ~24px */
  }

  @media (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    top: ${(p) => p.theme.spacing.xl}px; /* ~32px */
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: ${(p) => p.theme.spacing.lg}px;
  align-items: center;
`;

export const NavLink = styled.a`
  color: ${(p) => p.theme.colors.warmIvory};
  text-decoration: none;
  font-size: ${(p) => p.theme.typography.fontSizes.sm}px;
  font-weight: ${(p) => p.theme.typography.fontWeights.medium};
  text-transform: uppercase;
  opacity: 0.9;
`;

export const Actions = styled.div`
  display: flex;
  gap: ${(p) => p.theme.spacing.md}px;
  align-items: center;
  /* create more breathing room between the action area and the right edge of the hero */
  @media (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    padding-right: ${(p) => p.theme.spacing.xxl}px; /* ~48px */
  }
`;

export const Wordmark = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const WordmarkLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  text-decoration: none;
  /* Nudge the wordmark visually away from the rounded corner without affecting layout
     Use transform so nav and actions remain in place; values tuned for desktop */
  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    transform: translate(40px, 18px);
  }
`;

export const Brand = styled.span`
  font-family: ${(p) => p.theme.typography.headingFontFamily};
  color: ${(p) => p.theme.colors.warmIvory};
  /* Slightly larger but with wide tracking so the capline visually aligns
     with the subtitle width beneath — preserves an intentional two-line lockup. */
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0.24em;
  text-transform: none;
  display: block;
`;

export const Subtitle = styled.span`
  font-family: ${(p) => p.theme.typography.fontFamily};
  color: ${(p) => p.theme.colors.warmIvory};
  /* Proportional reduction to match smaller brand */
  font-size: 9px;
  /* Keep the subtitle uppercase with elegant wide tracking */
  letter-spacing: 0.24em;
  text-transform: uppercase;
  opacity: 0.95;
`;

export default {};
