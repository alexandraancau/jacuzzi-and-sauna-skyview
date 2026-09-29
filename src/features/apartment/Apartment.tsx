import React from 'react';
import Section from '../../components/ui/Section/Section';
import Container from '../../components/ui/Container/Container';
import Button from '../../components/ui/Button/Button';
import ArrowRight from '../../components/ui/Icon/ArrowRight';
import bedIcon from '../../assets/icons/apartment/bed.svg';
import bathroomIcon from '../../assets/icons/apartment/bathroom.svg';
import guestsIcon from '../../assets/icons/apartment/guests.svg';
import livingRoomIcon from '../../assets/icons/apartment/living-room.svg';
import kitchenIcon from '../../assets/icons/apartment/kitchen.svg';
import wifiIcon from '../../assets/icons/apartment/wifi.svg';
import photoOne from '../../assets/images/apartment-gallery/photo-1.jpg';
import photoTwo from '../../assets/images/apartment-gallery/photo-2.jpg';
import photoThree from '../../assets/images/apartment-gallery/photo-3.jpg';
import {
  Wrapper,
  Content,
  Intro,
  Eyebrow,
  Divider,
  Heading,
  Body,
  AmenityGrid,
  AmenityItem,
  AmenityIcon,
  AmenityTitle,
  AmenityText,
  GallerySection,
  GalleryGrid,
  GalleryFeature,
  GalleryStack,
  GalleryCard,
  GalleryImage,
  GalleryAction,
} from './Apartment.styles';

const AMENITIES = [
  { title: '2 Bedrooms', text: 'Comfortable beds', icon: bedIcon },
  { title: '2 Bathrooms', text: 'Modern & spacious', icon: bathroomIcon },
  { title: 'Up to 6 Guests', text: 'Ideal for families', icon: guestsIcon },
  { title: 'Living Room', text: 'With Smart TV', icon: livingRoomIcon },
  { title: 'Fully Equipped Kitchen', text: 'Cook with ease', icon: kitchenIcon },
  { title: 'High-Speed Wi‑Fi', text: 'Stay connected', icon: wifiIcon },
];

const GALLERY_IMAGES = [
  { src: photoThree, alt: 'Modern apartment living area' },
  { src: photoTwo, alt: 'Warm bedroom detail' },
  { src: photoOne, alt: 'Cozy apartment corner' },
];

const Apartment: React.FC = () => {
  return (
    <Wrapper id="apartment">
      <Section background="transparent" spacing="large">
        <Content>
          <Container>
            <Intro>
              <Eyebrow>THE APARTMENT</Eyebrow>
              <Divider aria-hidden />

              <Heading>Spacious, stylish and fully equipped.</Heading>

              <Body>
                A modern penthouse designed for families and friends, with everything you need
                for a comfortable and unforgettable stay.
              </Body>

              <AmenityGrid>
                {AMENITIES.map((item) => (
                  <AmenityItem key={item.title}>
                    <AmenityIcon src={item.icon} alt="" aria-hidden />
                    <AmenityTitle data-amenity={item.title === 'Fully Equipped Kitchen' ? 'kitchen' : undefined}>
                      {item.title}
                    </AmenityTitle>
                    <AmenityText>{item.text}</AmenityText>
                  </AmenityItem>
                ))}
              </AmenityGrid>

              <GalleryAction>
                <Button type="button" variant="primary" size="hero" endIcon={<ArrowRight />}>
                  SEE MORE DETAILS
                </Button>
              </GalleryAction>

              <GallerySection aria-label="Apartment photo gallery">
                <GalleryGrid>
                  <GalleryFeature>
                    <GalleryImage src={GALLERY_IMAGES[0].src} alt={GALLERY_IMAGES[0].alt} />
                  </GalleryFeature>

                  <GalleryStack>
                    <GalleryCard>
                      <GalleryImage src={GALLERY_IMAGES[1].src} alt={GALLERY_IMAGES[1].alt} />
                    </GalleryCard>
                    <GalleryCard>
                      <GalleryImage src={GALLERY_IMAGES[2].src} alt={GALLERY_IMAGES[2].alt} />
                    </GalleryCard>
                  </GalleryStack>
                </GalleryGrid>
              </GallerySection>
            </Intro>
          </Container>
        </Content>
      </Section>
    </Wrapper>
  );
};

export default Apartment;
