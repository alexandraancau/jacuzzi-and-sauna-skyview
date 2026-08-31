import React from 'react';
import styled from '@emotion/styled';

const Frame = styled.div`
  width: 100%;
  min-height: 100%;
  background: ${(p) => p.theme.colors.surface};
  /* Outer bottom frame spacing so the Warm Ivory frame is visible below content */
  padding-bottom: ${(p) => p.theme.spacing.sm}px; /* mobile 12px */

  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    padding-bottom: ${(p) => p.theme.spacing.md}px; /* tablet 16px */
  }

  @media (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    padding-bottom: ${(p) => p.theme.spacing.lg}px; /* desktop 24px */
    /* rounded bottom corners on desktop frame to match the overall page feel */
    border-bottom-left-radius: ${(p) => p.theme.radius.large};
    border-bottom-right-radius: ${(p) => p.theme.radius.large};
  }
`;

const Inner = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-left: ${(p) => p.theme.spacing.sm}px; /* mobile 12px */
  padding-right: ${(p) => p.theme.spacing.sm}px;

  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    padding-left: ${(p) => p.theme.spacing.md}px; /* tablet 16px */
    padding-right: ${(p) => p.theme.spacing.md}px;
  }

  @media (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    padding-left: ${(p) => p.theme.spacing.lg}px; /* desktop 24px */
    padding-right: ${(p) => p.theme.spacing.lg}px;
  }
`;

const PageFrame: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Frame>
      <Inner>
        {children}
      </Inner>
    </Frame>
  );
};

export default PageFrame;
