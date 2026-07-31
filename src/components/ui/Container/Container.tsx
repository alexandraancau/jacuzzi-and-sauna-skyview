import React from 'react';
import type { ContainerProps } from './Container.types';
import { StyledContainer } from './Container.styles';

const Container: React.FC<ContainerProps> = ({ children, ...rest }) => {
  return (
    <StyledContainer {...rest}>
      {children}
    </StyledContainer>
  );
};

export default Container;
