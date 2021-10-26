import { Container } from '@mui/material';
import React from 'react';
import PriceCard, { Card } from '../src/components/molecules/PriceCard';
import PriceGrid from '../src/components/templates/PriceGrid';
import AnimatedPage from './_animatedPage';

const cards: Card[] = [
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
    title: 'Basse Saison Carte 3 x 3h30',
    price: 300,
    content: ['cours suplémentaire 3h: 100€'],
  },
  {
    title: 'Haute Saison Carte 3 x 3h30',
    price: 300,
    content: ['cours suplémentaire 3h: 120€'],
  },
];

export default function Cours() {
  return (
    <AnimatedPage>
      <Container maxWidth='xl' style={{}}>
        <h1>Cours</h1>
        <h3>Nos prestations</h3>
        <PriceGrid cards={cards} />
      </Container>
    </AnimatedPage>
  );
}
