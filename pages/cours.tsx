import React from 'react';
import AnimatedPage from './_animatedPage';
import { Container } from '@mui/material';
import PriceGrid from '../src/components/templates/PriceGrid';

import { cards } from '../src/utils/pricing';

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
