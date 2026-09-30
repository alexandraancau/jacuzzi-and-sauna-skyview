import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button/Button';
import Container from '../../components/ui/Container/Container';
import Section from '../../components/ui/Section/Section';
import {
  Wrapper,
  CTA,
  CTAContent,
  CTATitle,
  CTAText,
  FooterGrid,
  BrandBlock,
  Brand,
  Subtitle,
  Motto,
  FooterColumn,
  FooterTitle,
  FooterLinkList,
  FooterLink,
  FooterMeta,
} from './Footer.styles';

const FOOTER_CONFIG = {
  whatsappUrl: 'https://wa.me/CONFIGURE_WHATSAPP_URL',
  instagramUrl: 'https://instagram.com/CONFIGURE_INSTAGRAM_HANDLE',
  privacyPolicyUrl: 'https://example.com/privacy-policy-placeholder',
  termsUrl: 'https://example.com/terms-placeholder',
};

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Apartment', href: '#apartment' },
  { label: 'Wellness', href: '#wellness' },
  { label: 'Guest Reviews', href: '#reviews' },
  { label: 'Area', href: '#area' },
];

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Section background="transparent" spacing="medium">
        <Container>
          <CTA>
            <CTAContent>
              <CTATitle>Ready for a private rooftop escape?</CTATitle>
              <CTAText>Settle in, unwind, and enjoy a slower, more memorable stay in Cluj.</CTAText>
            </CTAContent>
            <Button type="button" variant="primary" size="large" onClick={() => navigate('/availability')}>
              BOOK YOUR STAY
            </Button>
          </CTA>

          <FooterGrid>
            <BrandBlock>
              <Brand>SKYVIEW</Brand>
              <Subtitle>JACUZZI &amp; SAUNA</Subtitle>
              <Motto>From a traveler to a traveler.</Motto>
            </BrandBlock>

            <FooterColumn>
              <FooterTitle>Explore</FooterTitle>
              <FooterLinkList>
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </FooterLinkList>
            </FooterColumn>

            <FooterColumn>
              <FooterTitle>Connect</FooterTitle>
              <FooterLinkList>
                <li>
                  <FooterLink href={FOOTER_CONFIG.whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp link placeholder, configure before launch">
                    WhatsApp
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href={FOOTER_CONFIG.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram link placeholder, configure before launch">
                    Instagram
                  </FooterLink>
                </li>
              </FooterLinkList>
            </FooterColumn>

            <FooterColumn>
              <FooterTitle>Legal</FooterTitle>
              <FooterLinkList>
                <li>
                  <FooterLink href={FOOTER_CONFIG.privacyPolicyUrl} aria-label="Privacy policy placeholder, configure before launch">
                    Privacy Policy
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href={FOOTER_CONFIG.termsUrl} aria-label="Terms and conditions placeholder, configure before launch">
                    Terms &amp; Conditions
                  </FooterLink>
                </li>
              </FooterLinkList>
            </FooterColumn>
          </FooterGrid>

          <FooterMeta>© 2026 Skyview Apartment · Cluj-Napoca</FooterMeta>
        </Container>
      </Section>
    </Wrapper>
  );
};

export default Footer;
