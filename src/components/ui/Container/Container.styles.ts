import styled from '@emotion/styled';
import type { Theme } from '../../../theme/theme';

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  padding-left: ${(p: { theme?: Theme }) => `${p.theme?.spacing.md ?? 16}px`};
  padding-right: ${(p: { theme?: Theme }) => `${p.theme?.spacing.md ?? 16}px`};

  @media (min-width: 768px) {
    padding-left: ${(p: { theme?: Theme }) => `${p.theme?.spacing.lg ?? 24}px`};
    padding-right: ${(p: { theme?: Theme }) => `${p.theme?.spacing.lg ?? 24}px`};
  }

  @media (min-width: 1200px) {
    padding-left: ${(p: { theme?: Theme }) => `${p.theme?.spacing.xl ?? 32}px`};
    padding-right: ${(p: { theme?: Theme }) => `${p.theme?.spacing.xl ?? 32}px`};
  }
`;

export default StyledContainer;
