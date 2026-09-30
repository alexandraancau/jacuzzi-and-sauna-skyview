import React, { useEffect, useMemo, useState } from 'react';
import Section from '../../components/ui/Section/Section';
import Container from '../../components/ui/Container/Container';
import Button from '../../components/ui/Button/Button';
import ArrowRight from '../../components/ui/Icon/ArrowRight';
import { REVIEW_SUMMARY, REVIEWS } from './content';
import {
  Wrapper,
  Content,
  HeaderRow,
  EyebrowRow,
  Eyebrow,
  OakLine,
  Heading,
  Summary,
  RatingValue,
  Stars,
  SummaryText,
  SummaryNote,
  Carousel,
  CarouselViewport,
  Track,
  Slide,
  Card,
  ImageWrap,
  CardImage,
  CardBody,
  QuoteRow,
  CardStars,
  ReviewText,
  MetaRow,
  AuthorWrap,
  Initials,
  Author,
  AuthorName,
  AuthorCountry,
  ReviewDate,
  Controls,
  NavButton,
  Dots,
  Dot,
  ButtonRow,
  PlaceholderNotice,
} from './Reviews.styles';

const renderStars = (rating: number) =>
  Array.from({ length: 5 }, (_, index) => (
    <span key={`${rating}-${index}`} aria-hidden="true">
      {index < rating ? '★' : '☆'}
    </span>
  ));

const Reviews: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleCount, setVisibleCount] = useState(() => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(REVIEWS.length / visibleCount)),
    [visibleCount],
  );

  const goToPrevious = () => {
    setCurrentPage((page) => (page === 0 ? totalPages - 1 : page - 1));
  };

  const goToNext = () => {
    setCurrentPage((page) => (page === totalPages - 1 ? 0 : page + 1));
  };

  const goToPage = (pageIndex: number) => setCurrentPage(pageIndex);

  const trackWidth = Math.max(1, Math.ceil(REVIEWS.length / visibleCount));
  const adjustedTranslate = currentPage * 100;

  const transformValue = `translateX(-${adjustedTranslate}%)`;

  return (
    <Wrapper id="reviews">
      <Section background="transparent" spacing="large">
        <Content>
          <Container>
            <HeaderRow>
              <div>
                <EyebrowRow>
                  <Eyebrow>GUEST REVIEWS</Eyebrow>
                  <OakLine aria-hidden />
                </EyebrowRow>
                <Heading>Real stays.<br />Lasting impressions.</Heading>
              </div>

              <Summary>
                <RatingValue>
                  <span>{REVIEW_SUMMARY.rating}</span>
                </RatingValue>
                <div>
                  <Stars aria-label={`Placeholder overall rating: ${REVIEW_SUMMARY.rating} out of 5`}>
                    {renderStars(5)}
                  </Stars>
                  <SummaryText>
                    <span>on Airbnb</span>
                    <span>{REVIEW_SUMMARY.reviewCount}</span>
                  </SummaryText>
                  <SummaryNote>{REVIEW_SUMMARY.sourceLabel}</SummaryNote>
                </div>
              </Summary>
            </HeaderRow>

            <Carousel aria-live="polite">
              <CarouselViewport>
                <Track style={{ transform: transformValue }}>
                  {Array.from({ length: trackWidth }, (_, pageIndex) => {
                    const pageSlice = REVIEWS.slice(pageIndex * visibleCount, pageIndex * visibleCount + visibleCount);

                    return (
                      <Slide key={`page-${pageIndex}`}>
                        {pageSlice.map((review) => (
                          <Card key={review.id}>
                            <ImageWrap>
                              <CardImage src={review.image} alt={review.title} />
                            </ImageWrap>

                            <CardBody>
                              <div>
                                <QuoteRow>
                                  <NavButton type="button" aria-label="Review quote indicator" disabled>
                                    “
                                  </NavButton>
                                  <CardStars aria-label={`Placeholder rating: ${review.rating} out of 5`}>
                                    {renderStars(review.rating)}
                                  </CardStars>
                                </QuoteRow>

                                <ReviewText>{review.quote}</ReviewText>
                              </div>

                              <MetaRow>
                                <AuthorWrap>
                                  <Initials>
                                    {review.guest
                                      .split(' ')
                                      .map((part) => part[0])
                                      .slice(0, 2)
                                      .join('')
                                      .toUpperCase()}
                                  </Initials>
                                  <Author>
                                    <AuthorName>{review.guest}</AuthorName>
                                    <AuthorCountry>{review.country}</AuthorCountry>
                                  </Author>
                                </AuthorWrap>
                                <ReviewDate>{review.date}</ReviewDate>
                              </MetaRow>
                            </CardBody>
                          </Card>
                        ))}
                      </Slide>
                    );
                  })}
                </Track>
              </CarouselViewport>
            </Carousel>

            <Controls>
              <NavButton type="button" onClick={goToPrevious} aria-label="Previous reviews" disabled={totalPages <= 1}>
                ‹
              </NavButton>

              <Dots aria-label="Review carousel pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                  <Dot
                    key={`dot-${index}`}
                    type="button"
                    $active={index === currentPage}
                    onClick={() => goToPage(index)}
                    aria-label={`Go to review page ${index + 1}`}
                  />
                ))}
              </Dots>

              <NavButton type="button" onClick={goToNext} aria-label="Next reviews" disabled={totalPages <= 1}>
                ›
              </NavButton>
            </Controls>

            <ButtonRow>
              <Button type="button" variant="primary" size="hero" endIcon={<ArrowRight />}>
                READ MORE REVIEWS
              </Button>
            </ButtonRow>

            <PlaceholderNotice>
              Temporary placeholder review content — replace with verified Airbnb and Booking.com feedback before publication.
            </PlaceholderNotice>
          </Container>
        </Content>
      </Section>
    </Wrapper>
  );
};

export default Reviews;
