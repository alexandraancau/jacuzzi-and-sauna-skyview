import styled from '@emotion/styled';
import type { ButtonSize, ButtonVariant } from './Button.types';
import type { Theme } from '../../../theme/theme';

// Transient props interface keeps props from leaking into the DOM
export interface StyledButtonProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
  theme?: Theme;
}

const sizeStyles: Record<ButtonSize, string> = {
  small: `padding: 6px 10px; font-size: 14px;`,
  medium: `padding: 10px 16px; font-size: 16px;`,
  large: `padding: 14px 20px; font-size: 18px;`,
  hero: `padding: 16px 34px; font-size: 16px;`,
};

// Use only allowed theme tokens: signaturePlum, signaturePlumDark, warmIvory and surface
const variantStyles: Record<ButtonVariant, (theme: Theme) => string> = {
  primary: (t: Theme) => `
    background: ${t.colors.signaturePlum};
    color: ${t.colors.warmIvory};
    border: none;
    &:hover { background: ${t.colors.signaturePlumDark}; }
    &:disabled { background: ${t.colors.signaturePlum}; opacity: 0.7; }
  `,
  secondary: (t: Theme) => `
    background: ${t.colors.surface};
    color: ${t.colors.signaturePlum};
    border: 1px solid ${t.colors.signaturePlum};
    &:hover { background: ${t.colors.surface}; filter: brightness(0.98); }
    &:disabled { color: ${t.colors.signaturePlumDark}; border-color: ${t.colors.surface}; opacity: 0.9; }
  `,
};

export const StyledButton = styled('button', {
  shouldForwardProp: (prop: string) => prop !== '$variant' && prop !== '$size',
})<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(p: StyledButtonProps) => p.theme?.radius.small ?? 0};
  cursor: pointer;
  line-height: 1;
  transition: background 150ms ease, color 150ms ease, border-color 150ms ease;
  ${(props: StyledButtonProps) => sizeStyles[props.$size]}
  ${(props: StyledButtonProps) => variantStyles[props.$variant](props.theme as Theme)}
  .button-icon {
    display: inline-flex;
    align-items: center;
    margin-left: 12px;
    line-height: 0;
  }
  .button-icon svg {
    display: block;
    width: 18px;
    height: 12px;
  }
`;
