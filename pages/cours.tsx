import React, { useContext, useEffect } from 'react';
import AnimatedPage from './_animatedPage';
import { Button, Container } from '@mui/material';
import PriceGrid from '../src/components/templates/PriceGrid';

import { cards } from '../src/content/coursContent';
import { Context as AppContext } from '../src/context/AppContext';
import { lightPalette } from '../styles/theme/theme';
import { LocalPhone } from '@mui/icons-material';
import { getQueryParams } from '../src/utils/getQueryParams';
import { scrollToId } from '../src/utils/scrollToId';
import { langIndex } from '../src/utils/langIndex';

export default function Cours() {
  const {
    state: { lang },
  } = useContext(AppContext);

  const index = langIndex(lang);

  useEffect(() => {
    const { scrollTo } = getQueryParams(window.location.search);

    if (scrollTo === 'true') setTimeout(() => scrollToId('reservation'), 300);
  }, []);

  return (
    <AnimatedPage>
      <Container maxWidth='lg'>
        <h1>{index ? 'Initiation | Practice' : 'Initiation | Pratique'}</h1>
        <div
          style={{
            marginBottom: '2rem',
          }}>
          <span
            style={{
              color: lightPalette.secondary.main,
            }}>
            {index
              ? 'High season : July-August'
              : 'Haute saison : Juillet-Août'}
          </span>
          <br />
          <span
            style={{
              color: lightPalette.primary.main,
            }}>
            {index
              ? 'Low season : April-June | September-October'
              : 'Basse Saison: Avril-Juin | Septembre-Octobre'}
          </span>
        </div>

        <div style={{ marginBottom: '5rem' }}>
          <PriceGrid cards={cards} langIndex={index} />
        </div>
      </Container>
      <Container
        id='reservation'
        maxWidth='lg'
        style={{
          marginBottom: '10rem',
        }}>
        <h1>{index ? 'Reservation' : 'Reservation'}</h1>
        <div>
          {index
            ? 'You can book by phone at this number :'
            : 'Les réservations se font par téléphone au numéro :'}
        </div>
        <Button
          color='primary'
          variant='contained'
          href='tel:+33442018001'
          startIcon={<LocalPhone />}
          style={{ fontWeight: 'bold', marginTop: '1rem', color: 'white' }}>
          +33 4 42 01 80 01
        </Button>
      </Container>
    </AnimatedPage>
  );
}
