import React, { useContext } from 'react';
import AnimatedPage from './_animatedPage';
import { Container } from '@mui/material';
import PriceGrid from '../src/components/templates/PriceGrid';

import { cards } from '../src/content/coursContent';
import { Context as AppContext } from '../src/context/AppContext';
import { useLang } from '../src/hooks/useLang';
import { lightPalette } from '../styles/theme/theme';

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
    </AnimatedPage>
  );
}
