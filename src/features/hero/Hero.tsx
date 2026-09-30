import { useNavigate } from 'react-router-dom';
import heroImage from '../../assets/hero.jpg';
import Button from '../../components/ui/Button/Button';
import ArrowRight from '../../components/ui/Icon/ArrowRight';
import Container from '../../components/ui/Container';
import Section from '../../components/ui/Section';
import { StyledHeroSection, Overlay, HeroContent, HeroHeading, HeroText, Divider } from './Hero.styles';

function Hero() {
  const navigate = useNavigate();

  return (
    <Section background="transparent" spacing="large">
      <StyledHeroSection $backgroundImage={heroImage}>
        <Overlay />
        <Container>
          <HeroContent>
              <HeroHeading>
                Elevate
                <br />
                your stay.
              </HeroHeading>
              <Divider aria-hidden />
              <HeroText>A private rooftop apartment with jacuzzi, sauna and breathtaking views.</HeroText>
              <Button type="button" variant="primary" size="hero" endIcon={<ArrowRight />} onClick={() => navigate('/availability')}>
                BOOK YOUR ESCAPE
              </Button>
          </HeroContent>
        </Container>
      </StyledHeroSection>
    </Section>
  );
}

export default Hero;