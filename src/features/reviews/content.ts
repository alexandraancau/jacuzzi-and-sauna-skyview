import imageOne from '../../assets/images/apartment-gallery/photo-1.jpg';
import imageTwo from '../../assets/images/apartment-gallery/photo-2.jpg';
import imageThree from '../../assets/images/apartment-gallery/photo-3.jpg';
import imageFour from '../../assets/images/living-room.jpg';
import imageFive from '../../assets/images/sauna-interior.jpg';
import imageSix from '../../assets/images/rooftop-terrace.jpg';

export type Review = {
  id: string;
  image: string;
  title: string;
  quote: string;
  guest: string;
  country: string;
  date: string;
  rating: number;
  source: string;
  isPlaceholder: boolean;
};

export const REVIEWS: Review[] = [
  {
    id: 'placeholder-1',
    image: imageOne,
    title: 'Placeholder review 1',
    quote:
      'Placeholder review text for Skyview. Replace with a verified guest quote before publishing. This section is intentionally marked as demo content.',
    guest: 'Placeholder guest',
    country: 'Country placeholder',
    date: 'Temporary date placeholder',
    rating: 5,
    source: 'Temporary placeholder — verify before publishing',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-2',
    image: imageTwo,
    title: 'Placeholder review 2',
    quote:
      'Placeholder quote. This sample review is not a verified guest statement and must be replaced with real booking platform feedback before launch.',
    guest: 'Placeholder guest',
    country: 'Country placeholder',
    date: 'Temporary date placeholder',
    rating: 5,
    source: 'Temporary placeholder — verify before publishing',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-3',
    image: imageThree,
    title: 'Placeholder review 3',
    quote:
      'Placeholder quote. Use a verified review from Airbnb, Booking.com or another trusted source before publishing this section publicly.',
    guest: 'Placeholder guest',
    country: 'Country placeholder',
    date: 'Temporary date placeholder',
    rating: 5,
    source: 'Temporary placeholder — verify before publishing',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-4',
    image: imageFour,
    title: 'Placeholder review 4',
    quote:
      'Placeholder review text. This section is in demo mode until authentic guest feedback is supplied and approved for publication.',
    guest: 'Placeholder guest',
    country: 'Country placeholder',
    date: 'Temporary date placeholder',
    rating: 5,
    source: 'Temporary placeholder — verify before publishing',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-5',
    image: imageFive,
    title: 'Placeholder review 5',
    quote:
      'Placeholder review text. The rating and guest details shown here are intentionally non-final and should be swapped with verified review data.',
    guest: 'Placeholder guest',
    country: 'Country placeholder',
    date: 'Temporary date placeholder',
    rating: 5,
    source: 'Temporary placeholder — verify before publishing',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-6',
    image: imageSix,
    title: 'Placeholder review 6',
    quote:
      'Placeholder review text. Use authentic guest feedback only. This example is not published content and is included purely for implementation review.',
    guest: 'Placeholder guest',
    country: 'Country placeholder',
    date: 'Temporary date placeholder',
    rating: 5,
    source: 'Temporary placeholder — verify before publishing',
    isPlaceholder: true,
  },
];

export const REVIEW_SUMMARY = {
  rating: '4.9',
  reviewCount: '120+ guest reviews',
  sourceLabel: 'Temporary demo score — verify before publishing',
};
