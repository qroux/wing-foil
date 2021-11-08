import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Context as AppContext } from '../../context/AppContext';
import { useLang } from '../../hooks/useLang';
import { scrollToId } from '../../utils/scrollToId';

export default function BannerCta() {
  const { pathname } = useRouter();

  const {
    // @ts-ignore
    state: { lang },
  } = useContext(AppContext);

  const langIndex = useLang(lang);

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
        {langIndex ? 'Book a session' : 'Réserver une séance'}
      </Button>
    ) : (
      <Link
        href={{
          pathname: '/cours',
          hash: 'reservation',
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
          {langIndex ? 'Book a session' : 'Réserver'}
        </Button>
      </Link>
    );
  return <>{renderCTA}</>;
}
