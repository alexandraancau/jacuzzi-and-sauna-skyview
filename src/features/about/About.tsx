import React from 'react';
import Section from '../../components/ui/Section/Section';
import Container from '../../components/ui/Container/Container';
import Button from '../../components/ui/Button/Button';
import { Wrapper, Content, Grid, Photo, Text, EyebrowRow, Eyebrow, OakLine, Heading, Body } from './About.styles';
import ABOUT from './content';
import photo from '../../assets/images/living-room.jpg';

const About: React.FC = () => {
  return (
    <Wrapper>
      <Section background="transparent" spacing="large">
        <Content>
          <Container>
            <Grid>
              <Text>
                <EyebrowRow>
                  <Eyebrow>{ABOUT.eyebrow}</Eyebrow>
                  <OakLine aria-hidden />
                </EyebrowRow>

                <Heading>{ABOUT.heading}</Heading>

                <Body>{ABOUT.body}</Body>

                <Button variant="primary" size="small">{ABOUT.cta}</Button>
              </Text>

              <Photo src={photo} alt="Living room with warm light" />
            </Grid>
          </Container>
        </Content>
      </Section>
    </Wrapper>
  );
};

export default About;
