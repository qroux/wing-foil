import React, { useContext } from 'react';
import AnimatedPage from './_animatedPage';
import { Button, Container, IconButton } from '@mui/material';
import PriceGrid from '../src/components/templates/PriceGrid';

import { cards } from '../src/content/coursContent';
import { Context as AppContext } from '../src/context/AppContext';
import { useLang } from '../src/hooks/useLang';
import { lightPalette } from '../styles/theme/theme';
import { LocalPhone } from '@mui/icons-material';

export default function Cours() {
  const {
    // @ts-ignore
    state: { lang },
  } = useContext(AppContext);

  const langIndex = useLang(lang);

  return (
    <AnimatedPage>
      <Container maxWidth='lg' style={{}}>
        <h1>{langIndex ? 'Initiation | Practice' : 'Initiation | Pratique'}</h1>
        <div
          style={{
            marginBottom: '2rem',
          }}>
          <span
            style={{
              color: lightPalette.secondary.main,
            }}>
            {langIndex
              ? 'High season : July-August'
              : 'Haute saison : Juillet-Août'}
          </span>
          <br />
          <span
            style={{
              color: lightPalette.primary.main,
            }}>
            {langIndex
              ? 'Low season : April-June | September-October'
              : 'Basse Saison: Avril-Juin | Septembre-Octobre'}
          </span>
        </div>

        <div style={{ marginBottom: '5rem' }}>
          <PriceGrid cards={cards} langIndex={langIndex} />
        </div>
      </Container>
      <Container
        maxWidth='lg'
        style={{
          marginBottom: '10rem',
        }}>
        <h1>{langIndex ? 'Reservation' : 'Reservation'}</h1>
        <div>
          {langIndex
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
