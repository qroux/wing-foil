import React from 'react';
import AnimatedPage from './_animatedPage';
import { Container } from '@mui/material';
import PriceGrid from '../src/components/templates/PriceGrid';

import { cards } from '../src/utils/pricing';

export default function Cours() {
  return (
    <AnimatedPage>
      <Container maxWidth='xl' style={{}}>
        <h1>Apprentissage / Pratique</h1>
        <div style={{ marginBottom: '5rem' }}>
          <PriceGrid cards={cards} />
        </div>
      </Container>
    </AnimatedPage>
  );
}
