// Properly augment @emotion/react Theme interface with our app Theme
import type { Theme as AppTheme } from '../theme/theme';
import '@emotion/react';

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface Theme extends AppTheme {}
}