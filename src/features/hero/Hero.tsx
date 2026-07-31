import heroImage from '../../assets/hero.jpg';
import Button from '../../components/ui/Button/Button';
import Container from '../../components/ui/Container';
import Section from '../../components/ui/Section';
import {
  StyledHeroSection,
  Overlay,
  HeroContent,
  HeroHeading,
  HeroText,
} from './Hero.styles';

function Hero() {
  return (
    <Section background="transparent" spacing="large">
      <StyledHeroSection $backgroundImage={heroImage}>
        <Overlay />
        <Container>
          <HeroContent>
            <HeroHeading>Jacuzzi & Sauna Skyview</HeroHeading>
            <HeroText>Unwind in your private jacuzzi and sauna retreat in Cluj-Napoca.</HeroText>
            <Button>Verifică disponibilitatea</Button>
          </HeroContent>
        </Container>
      </StyledHeroSection>
    </Section>
  );
}

export default Hero;