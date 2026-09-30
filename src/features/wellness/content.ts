import privateJacuzziImage from '../../assets/images/private-jacuzzi.jpg';
import rooftopTerraceImage from '../../assets/images/rooftop-terrace.jpg';
import saunaInteriorImage from '../../assets/images/sauna-interior.jpg';

const WELLNESS = [
  {
    title: 'FINNISH SAUNA',
    text: 'Your private place to unwind',
    image: saunaInteriorImage,
  },
  {
    title: 'PRIVATE JACUZZI',
    text: 'Warm water, open skies',
    image: privateJacuzziImage,
  },
  {
    title: 'ROOFTOP TERRACE',
    text: 'Slow evenings above the city',
    image: rooftopTerraceImage,
  },
] as const;

export default WELLNESS;
