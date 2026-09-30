import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button/Button';
import styled from '@emotion/styled';
import { WordmarkLink, Brand, Subtitle } from './Header.styles';
import Container from '../../ui/Container/Container';
import { Wrapper, Inner, Nav, NavLink, Actions } from './Header.styles';
const StyledHeaderButton = styled(Button)`
  padding: 12px 24px;

  /* Desktop refinements: slightly wider/taller and less rounded (not pill-shaped).
     Also nudge left to create breathing room from the hero's right edge. */
  @media (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    padding: 14px 28px;
    transform: translateX(-12px);
  }
  text-transform: uppercase;
  /* Ensure the header button uses the theme signature plum color solidly
     and does not appear muted by any surrounding styles. Keep size/position
     and radius unchanged. */
  background: ${(p) => p.theme.colors.signaturePlum};
  color: ${(p) => p.theme.colors.warmIvory};
  border: none;
  &:hover {
    background: ${(p) => p.theme.colors.signaturePlumDark};
  }
`;

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Inner>
          <WordmarkLink to="/" aria-label="Skyview Jacuzzi & Sauna">
            <Brand>SKYVIEW</Brand>
            <Subtitle>JACUZZI &amp; SAUNA</Subtitle>
          </WordmarkLink>
          <Nav aria-label="Main navigation">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/#apartment">Apartment</NavLink>
            <NavLink href="/#wellness">Wellness</NavLink>
            <NavLink href="/#gallery">Gallery</NavLink>
            <NavLink href="/#area">Area</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
          </Nav>
          <Actions>
            <StyledHeaderButton type="button" variant="primary" size="small" onClick={() => navigate('/availability')}>
              Book now
            </StyledHeaderButton>
          </Actions>
        </Inner>
      </Container>
    </Wrapper>
  );
};

export default Header;
