import React from 'react';
import Section from '../../components/ui/Section/Section';
import Container from '../../components/ui/Container/Container';
import { Wrapper, Content, Grid, Item, IconWrap, ItemTitle, ItemText } from './Highlights.styles';
import HIGHLIGHTS from './content';
import jacuzziIcon from '../../assets/icons/highlights/jacuzzi.svg';
import saunaIcon from '../../assets/icons/highlights/sauna.svg';
import skylineIcon from '../../assets/icons/highlights/skyline.svg';
import proseccoIcon from '../../assets/icons/highlights/prosecco.svg';

const icons: Record<string, string> = {
  jacuzzi: jacuzziIcon,
  sauna: saunaIcon,
  skyline: skylineIcon,
  prosecco: proseccoIcon,
};

const Icon = ({ id }: { id: string }) => {
  const src = icons[id];
  if (!src) return null;

  return <img src={src} alt="" aria-hidden />;
};

const Highlights: React.FC = () => {
  return (
    <Wrapper>
      <Section background="surface" spacing="small">
        <Content>
          <Container>
            <Grid role="list" aria-label="Experience highlights">
              {HIGHLIGHTS.map((h) => (
                <Item key={h.id} role="listitem">
                  <IconWrap aria-hidden>
                    <Icon id={h.id} />
                  </IconWrap>
                  <ItemTitle>{h.title}</ItemTitle>
                  <ItemText>{h.text}</ItemText>
                </Item>
              ))}
            </Grid>
          </Container>
        </Content>
      </Section>
    </Wrapper>
  );
};

export default Highlights;
