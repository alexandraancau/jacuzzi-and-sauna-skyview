import styled from '@emotion/styled';

export const Wrapper = styled.footer`
  background: ${(p) => p.theme.colors.deepGraphite};
  color: ${(p) => p.theme.colors.warmIvory};
`;

export const CTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 22px 28px;
  margin-bottom: 36px;
  background: ${(p) => p.theme.colors.warmIvory};
  border: 1px solid rgba(122, 98, 116, 0.12);
  border-radius: 18px;
  color: ${(p) => p.theme.colors.deepGraphite};

  @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    padding: 18px 20px;
    margin-bottom: 28px;
  }
`;

export const CTAContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CTATitle = styled.h3`
  margin: 0;
  font-family: ${(p) => p.theme.typography.headingFontFamily};
  font-size: clamp(1.7rem, 2.5vw, 2.6rem);
  line-height: 1.05;
  letter-spacing: -0.05em;
  color: ${(p) => p.theme.colors.deepGraphite};
  font-weight: ${(p) => p.theme.typography.fontWeights.regular};
`;

export const CTAText = styled.p`
  margin: 0;
  font-size: 0.96rem;
  line-height: 1.7;
  color: rgba(63, 59, 58, 0.8);
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr 1fr;
  gap: 30px;
  padding-top: 8px;
  padding-bottom: 28px;
  border-top: 1px solid rgba(246, 243, 241, 0.15);

  @media (max-width: ${(p) => p.theme.breakpoints.desktop}) {
    grid-template-columns: 1.2fr 1fr 1fr;
  }

  @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const BrandBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const Brand = styled.div`
  font-family: ${(p) => p.theme.typography.headingFontFamily};
  font-size: 2rem;
  line-height: 0.9;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.warmIvory};
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 0.7rem;
  line-height: 1.4;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(246, 243, 241, 0.76);
`;

export const Motto = styled.p`
  margin: 10px 0 0;
  font-size: 0.96rem;
  line-height: 1.5;
  color: rgba(246, 243, 241, 0.8);
  font-style: italic;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FooterTitle = styled.h4`
  margin: 0;
  font-size: 0.74rem;
  line-height: 1.4;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(246, 243, 241, 0.7);
`;

export const FooterLinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterLink = styled.a`
  color: ${(p) => p.theme.colors.warmIvory};
  text-decoration: none;
  font-size: 0.96rem;
  line-height: 1.5;
  transition: opacity 150ms ease, color 150ms ease;

  &:hover {
    color: ${(p) => p.theme.colors.champagneGlow};
  }
`;

export const FooterMeta = styled.p`
  margin: 0;
  padding-bottom: 12px;
  font-size: 0.78rem;
  line-height: 1.5;
  letter-spacing: 0.04em;
  color: rgba(246, 243, 241, 0.72);
`;
