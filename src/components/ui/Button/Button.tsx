import React from 'react';
import type { ButtonProps } from './Button.types';
import { StyledButton } from './Button.styles';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  endIcon,
  ...rest
}) => {
  return (
    <StyledButton $variant={variant} $size={size} {...rest}>
      {children}
      {endIcon ? <span className="button-icon" aria-hidden>{endIcon}</span> : null}
    </StyledButton>
  );
};

export default Button;
