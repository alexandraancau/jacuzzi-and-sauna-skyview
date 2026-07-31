import styled from '@emotion/styled';
import type { Theme } from '../../../theme/theme';
import type { SectionBackground, SectionSpacing } from './Section.types';

export interface StyledSectionProps {
  $background: SectionBackground;
  $spacing: SectionSpacing;
  theme?: Theme;
}

const spacingMap: Record<SectionSpacing, keyof Theme['spacing']> = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
};

export const StyledSection = styled.section<StyledSectionProps>`
  width: 100%;
  box-sizing: border-box;
  background: ${(p: StyledSectionProps) =>
    p.$background === 'surface' ? p.theme?.colors.surface ?? 'transparent' : 'transparent'};
  padding-top: ${(p: StyledSectionProps) => `${p.theme?.spacing[spacingMap[p.$spacing]] ?? p.theme?.spacing.md ?? 16}px`};
  padding-bottom: ${(p: StyledSectionProps) => `${p.theme?.spacing[spacingMap[p.$spacing]] ?? p.theme?.spacing.md ?? 16}px`};
`;

export default StyledSection;
