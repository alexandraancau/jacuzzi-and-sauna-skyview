import type { ImgHTMLAttributes } from 'react';

export type LogoSize = 'small' | 'medium' | 'large';

export interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: LogoSize;
  /**
   * Override alt text. Defaults to "Skyview Jacuzzi & Sauna" if omitted.
   */
  alt?: string;
}