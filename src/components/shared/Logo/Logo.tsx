import type { LogoProps } from './Logo.types';
import Wrapper from './Logo.styles';
import logoSrc from '../../../assets/logo/skyview-logo-v1.png';

export const Logo = ({
  size = 'medium',
  alt = 'Skyview Jacuzzi & Sauna',
  ...imgProps
}: LogoProps) => {
  return (
    <Wrapper $size={size}>
      <img {...imgProps} src={logoSrc} alt={alt} />
    </Wrapper>
  );
};

export default Logo;