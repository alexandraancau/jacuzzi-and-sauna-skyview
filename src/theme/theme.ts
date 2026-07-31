import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';
import { breakpoints } from './breakpoints';
import { radius } from './radius';
import { shadows } from './shadows';

export const theme = {
  colors,
  spacing,
  typography,
  breakpoints,
  radius,
  shadows,
};

export type Theme = typeof theme;

export default theme;
