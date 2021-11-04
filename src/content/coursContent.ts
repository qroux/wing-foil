import { lightPalette } from '../../styles/theme/theme';
import { Card } from '../components/molecules/PriceCard';

export const cards: Card[] = [
  {
    photo: 'foil-1-min.webp',
    duration: '1h',
    title: ['foil tracté', 'Towed foil'],
    price: 70,
    content: [['Foil tracté par un bateau'], ['Towed foil board']],
  },
  {
    photo: 'foil-2-min.webp',
    duration: '1h30',
    title: ['Initiation WingFoil', 'WingFoil initiation session '],
    price: 120,
    content: [
      ["maitrise de l'aile", 'équilibre sur la planche', 'premier décollage'],
      ['wing handling', 'Balance training on paddle', 'first take off'],
    ],
  },
  {
    photo: 'sylvain-min.webp',
    duration: '3h30',
    tag: ['Basse Saison', 'Low season'],
    color: lightPalette.primary.main,
    title: ['Carte 3x3h30', 'Practice sessions : 3x3h30'],
    price: 300,
    content: [
      ['*cours suplémentaire 3h: 100€'],
      ['Beginner to Advanced practice', '*3h additional session: 100€'],
    ],
  },
  {
    photo: 'foil-4-min.webp',
    duration: '3h30',
    tag: ['Haute Saison', 'High season'],
    color: lightPalette.secondary.main,
    title: ['Carte 3x3h30', 'Practice sessions : 3x3h30'],
    price: 360,
    content: [
      ['*cours suplémentaire 3h: 120€'],
      ['Beginner to Advanced practice', '*3h additional session: 100€'],
    ],
  },
];
