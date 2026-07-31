import React from 'react';
import type { SectionProps } from './Section.types';
import { StyledSection } from './Section.styles';

const Section: React.FC<SectionProps> = ({
  children,
  background = 'transparent',
  spacing = 'large',
  className,
  ...rest
}) => {
  return (
    <StyledSection $background={background} $spacing={spacing} className={className} {...rest}>
      {children}
    </StyledSection>
  );
};

export default Section;
