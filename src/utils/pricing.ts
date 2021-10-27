import { lightPalette } from '../../styles/theme/theme';
import { Card } from '../components/molecules/PriceCard';

export const cards: Card[] = [
  {
    photo: 'foil-1-min.jpg',
    duration: '1h',
    title: 'foil tracté',
    price: 70,
    content: ['première ligne', 'seconde ligne'],
  },
  {
    photo: 'foil-2-min.png',
    duration: '1h30',
    title: 'Initiation WingFoil',
    price: 120,
    content: ['première ligne', 'seconde ligne'],
  },
  {
    photo: 'sylvain-min.jpg',
    duration: '3h30',
    tag: 'Basse Saison',
    color: lightPalette.primary.main,
    title: 'Carte 3x3h30',
    price: 300,
    content: ['cours suplémentaire 3h: 100€'],
  },
  {
    photo: 'foil-4-min.png',
    duration: '3h30',
    tag: 'Haute Saison',
    color: lightPalette.secondary.main,
    title: 'Carte 3x3h30',
    price: 360,
    content: ['cours suplémentaire 3h: 120€'],
  },
];
