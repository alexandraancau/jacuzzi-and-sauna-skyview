import React from 'react';
import Section from '../../components/ui/Section/Section';
import Container from '../../components/ui/Container/Container';
import {
  Wrapper,
  Content,
  Header,
  Heading,
  ItalicWord,
  Grid,
  Card,
  CardImage,
  CardOverlay,
  CardBody,
  CardTitle,
  CardText,
} from './Wellness.styles';
import WELLNESS from './content';

const Wellness: React.FC = () => {
  return (
    <Wrapper>
      <Section background="transparent" spacing="large">
        <Content>
          <Container>
            <Header>
              <Heading>
                Your private <ItalicWord>wellness</ItalicWord> space
              </Heading>
            </Header>

            <Grid>
              {WELLNESS.map((item) => (
                <Card key={item.title}>
                  <CardImage src={item.image} alt={item.title} />
                  <CardOverlay aria-hidden />
                  <CardBody>
                    <CardTitle>{item.title}</CardTitle>
                    <CardText>{item.text}</CardText>
                  </CardBody>
                </Card>
              ))}
            </Grid>
          </Container>
        </Content>
      </Section>
    </Wrapper>
  );
};

export default Wellness;
