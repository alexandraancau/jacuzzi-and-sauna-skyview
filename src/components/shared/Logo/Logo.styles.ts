import styled from '@emotion/styled';
import type { LogoSize } from './Logo.types';

const SIZE_MAP: Record<LogoSize, number> = {
  small: 80,
  medium: 160,
  large: 240,
};


interface WrapperProps {
  $size?: LogoSize;
}

export const Wrapper = styled.div<WrapperProps>`
  display: inline-block;
  width: ${({ $size = 'medium' }) => `${SIZE_MAP[$size]}px`};
  max-width: 100%;
  line-height: 0;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export default Wrapper;
