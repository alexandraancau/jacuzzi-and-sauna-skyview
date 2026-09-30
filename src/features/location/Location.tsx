import React from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../../components/ui/Section/Section';
import Container from '../../components/ui/Container/Container';
import Button from '../../components/ui/Button/Button';
import ArrowRight from '../../components/ui/Icon/ArrowRight';
import airportIcon from '../../assets/icons/location/airport.svg';
import iuliusMallIcon from '../../assets/icons/location/iulius-mall.svg';
import cityCentreIcon from '../../assets/icons/location/city-centre.svg';
import privateParkingIcon from '../../assets/icons/location/private-parking.svg';
import evChargingIcon from '../../assets/icons/location/ev-charging.svg';
import shopsEssentialsIcon from '../../assets/icons/location/shops-essentials.svg';
import {
  Wrapper,
  Content,
  Grid,
  LeftColumn,
  EyebrowRow,
  Eyebrow,
  OakLine,
  Heading,
  Body,
  FactGrid,
  FactItem,
  FactIconWrap,
  FactText,
  FactPrimary,
  FactSecondary,
  FactTertiary,
  BookAction,
  RightColumn,
  MapPanel,
  MapCanvas,
  MapMarker,
  MapLabel,
  MapLabelTitle,
} from './Location.styles';

type LocationFact = {
  kind: 'airport' | 'shopping' | 'city' | 'parking' | 'ev' | 'essentials';
  primary: string;
  secondary?: string;
  tertiary?: string;
  icon: string;
};

const LOCATION_FACTS: LocationFact[] = [
  {
    kind: 'airport',
    primary: '8 min',
    secondary: 'Cluj-Napoca',
    tertiary: 'International Airport',
    icon: airportIcon,
  },
  { kind: 'shopping', primary: '5 min', secondary: 'Iulius Mall', icon: iuliusMallIcon },
  { kind: 'city', primary: '10 min', secondary: 'City Centre', tertiary: '(Union Square)', icon: cityCentreIcon },
  { kind: 'parking', primary: 'Private parking', secondary: 'Included', icon: privateParkingIcon },
  { kind: 'ev', primary: 'EV charging', secondary: 'On-site', tertiary: 'at the property', icon: evChargingIcon },
  { kind: 'essentials', primary: 'Shops &', secondary: 'essentials', tertiary: 'Supermarkets nearby', icon: shopsEssentialsIcon },
];

const Location: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Wrapper id="area">
      <Section background="transparent" spacing="large">
        <Content>
          <Container>
            <Grid>
              <LeftColumn>
                <EyebrowRow>
                  <Eyebrow>LOCATION — CLUJ-NAPOCA</Eyebrow>
                  <OakLine aria-hidden />
                </EyebrowRow>

                <Heading>
                  <span>Close to everything.</span>
                  <span>Above the everyday.</span>
                </Heading>

                <Body>
                  Set in a quiet part of Cluj-Napoca, Skyview keeps you close to the city while giving you space to slow down.
                </Body>

                <FactGrid>
                  {LOCATION_FACTS.map((fact) => (
                    <FactItem key={`${fact.primary}-${fact.secondary}`}>
                      <FactIconWrap>
                        <img src={fact.icon} alt="" aria-hidden="true" />
                      </FactIconWrap>
                      <FactText>
                        <FactPrimary>{fact.primary}</FactPrimary>
                        {fact.secondary ? <FactSecondary>{fact.secondary}</FactSecondary> : null}
                        {fact.tertiary ? <FactTertiary>{fact.tertiary}</FactTertiary> : null}
                      </FactText>
                    </FactItem>
                  ))}
                </FactGrid>

                <BookAction>
                  <Button type="button" variant="primary" size="hero" endIcon={<ArrowRight />} onClick={() => navigate('/availability')}>
                    BOOK YOUR STAY
                  </Button>
                </BookAction>
              </LeftColumn>

              <RightColumn>
                <MapPanel aria-label="Map showing the location of Skyview in Cluj-Napoca">
                  <MapCanvas>
                    <MapLabel className="airport">
                      <MapLabelTitle>Cluj-Napoca</MapLabelTitle>
                      <span>International Airport</span>
                    </MapLabel>

                    <MapLabel className="mall">
                      <MapLabelTitle>Iulius Mall</MapLabelTitle>
                      <span>5 min</span>
                    </MapLabel>

                    <MapLabel className="centre">
                      <MapLabelTitle>City Centre</MapLabelTitle>
                      <span>10 min</span>
                    </MapLabel>

                    <MapMarker>
                      <span>SKYVIEW</span>
                      <small>APARTMENT</small>
                    </MapMarker>
                  </MapCanvas>
                </MapPanel>
              </RightColumn>
            </Grid>
          </Container>
        </Content>
      </Section>
    </Wrapper>
  );
};

export default Location;
