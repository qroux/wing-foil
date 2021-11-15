import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Context as AppContext } from '../../context/AppContext';
import { langIndex } from '../../utils/langIndex';
import { scrollToId } from '../../utils/scrollToId';

export default function BannerCta() {
  const { pathname } = useRouter();

  const {
    state: { lang },
  } = useContext(AppContext);

  const label = langIndex(lang) ? 'Book a session' : 'Réserver une séance';

  const renderCTA =
    pathname === '/cours' ? (
      <Button
        variant='contained'
        color='primary'
        onClick={() => scrollToId('reservation')}
        style={{
          marginTop: '1rem',
          fontWeight: 'bold',
          color: 'white',
        }}>
        {label}
      </Button>
    ) : (
      <Link
        href={{
          pathname: '/cours',
          query: { scrollTo: true },
        }}
        passHref>
        <Button
          variant='contained'
          color='primary'
          style={{
            marginTop: '1rem',
            fontWeight: 'bold',
            color: 'white',
          }}>
          {label}
        </Button>
      </Link>
    );
  return <>{renderCTA}</>;
}
