import React from 'react';
import Section from '../../components/ui/Section/Section';
import Container from '../../components/ui/Container/Container';
import {
  Wrapper,
  Content,
  Grid,
  Photo,
  Text,
  Eyebrow,
  Heading,
  Body,
  Facts,
  Fact,
} from './Space.styles';
import SPACE from './content';
import photo from '../../assets/hero.jpg';

const Space: React.FC = () => {
  return (
    <Wrapper>
      <Section background="transparent" spacing="large">
        <Container>
          <Content>
            <Grid>
              <Photo $src={photo} role="img" aria-label="Living room with warm light" />
              <Text>
                <Eyebrow>{SPACE.eyebrow}</Eyebrow>
                <Heading>{SPACE.heading}</Heading>
                <Body>{SPACE.body}</Body>

                <Facts aria-hidden>
                  {SPACE.facts.map((f) => (
                    <Fact key={f.id}>{f.label}</Fact>
                  ))}
                </Facts>
              </Text>
            </Grid>
          </Content>
        </Container>
      </Section>
    </Wrapper>
  );
};

export default Space;
