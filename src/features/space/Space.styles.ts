import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  padding-top: ${(p) => p.theme.spacing.sectionTop}px;
  padding-bottom: ${(p) => p.theme.spacing.sectionBottom}px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(p) => p.theme.spacing.xl}px;

  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

export const Photo = styled.div<{ $src: string }>`
  width: 100%;
  height: 320px;
  background-image: url(${(p) => p.$src});
  background-size: cover;
  background-position: center;
  border-radius: ${(p) => p.theme.radius.large};
  box-shadow: ${(p) => p.theme.shadows.medium};
`;

export const Text = styled.div``;

export const Eyebrow = styled.p`
  margin: 0 0 ${(p) => p.theme.spacing.sm}px;
  font-size: ${(p) => p.theme.typography.fontSizes.sm}px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.signaturePlum};
`;

export const Heading = styled.h2`
  margin: 0 0 ${(p) => p.theme.spacing.md}px;
  font-size: ${(p) => p.theme.typography.headings.h2.size}px;
  font-weight: ${(p) => p.theme.typography.headings.h2.weight};
  color: ${(p) => p.theme.colors.deepGraphite};
  line-height: ${(p) => p.theme.typography.headings.h2.lineHeight};
`;

export const Body = styled.p`
  margin: 0 0 ${(p) => p.theme.spacing.lg}px;
  color: ${(p) => p.theme.colors.textMuted};
  font-size: ${(p) => p.theme.typography.fontSizes.md}px;
  line-height: ${(p) => p.theme.typography.lineHeights.relaxed};
  max-width: 560px;
`;

export const Facts = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: ${(p) => p.theme.spacing.lg}px;
  flex-wrap: wrap;
`;

export const Fact = styled.li`
  color: ${(p) => p.theme.colors.deepGraphite};
  font-size: ${(p) => p.theme.typography.fontSizes.md}px;
  background: transparent;
`;

export default {};
