import type { HTMLAttributes, ReactNode } from 'react';

export type SectionBackground = 'transparent' | 'surface';
export type SectionSpacing = 'small' | 'medium' | 'large';

export type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  background?: SectionBackground;
  spacing?: SectionSpacing;
  className?: string;
};

