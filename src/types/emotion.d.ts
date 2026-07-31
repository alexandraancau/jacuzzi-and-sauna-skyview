// Properly augment @emotion/react Theme interface with our app Theme
import type { Theme as AppTheme } from '../theme/theme';
import '@emotion/react';

declare module '@emotion/react' {
  // extend Emotion's Theme with our Theme shape
  export interface Theme extends AppTheme {}
}
