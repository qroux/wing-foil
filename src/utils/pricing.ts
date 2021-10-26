import { lightPalette } from '../../styles/theme/theme';
import { Card } from '../components/molecules/PriceCard';

export const cards: Card[] = [
  {
    title: 'foil tracté',
    price: 70,
    content: ['première ligne', 'seconde ligne'],
  },
  {
    title: 'Initiation WingFoil',
    price: 120,
    content: ['première ligne', 'seconde ligne'],
  },
  {
    tag: 'Basse Saison',
    color: lightPalette.primary.main,
    title: 'Carte 3 x 3h30',
    price: 300,
    content: ['cours suplémentaire 3h: 100€'],
  },
  {
    tag: 'Haute Saison',
    color: lightPalette.secondary.main,
    title: 'Carte 3 x 3h30',
    price: 360,
    content: ['cours suplémentaire 3h: 120€'],
  },
];
