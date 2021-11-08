import { useTheme } from '@mui/material';
import React, { useContext } from 'react';
import { Context as AppContext } from '../../context/AppContext';
import BannerCta from '../molecules/BannerCta';

export default function Banner() {
  const theme = useTheme();

  const {
    // @ts-ignore
    state: { lang },
  } = useContext(AppContext);

  return (
    <div
      className='page__layout'
      style={{
        height: '50vh',
        width: '100%',
        display: 'flex',
      }}>
      <div
        className='content'
        style={{
          backgroundImage:
            'radial-gradient(rgba(0,0,0, 0.3), rgba(0,0,0,0)), url(/profil-2-min.webp)',
          backgroundPosition: 'bottom left',
          backgroundSize: 'cover',
          height: '100%',
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}>
        <div
          className='content__container'
          style={{
            textAlign: 'center',
          }}>
          <h1
            style={{
              fontSize: '4rem',
              margin: 0,
            }}>
            <span
              style={{
                color: theme.palette.primary.main,
              }}>
              W
            </span>
            ing Foil
          </h1>
          <h2
            style={{
              margin: 0,
              fontWeight: 500,
            }}>
            Cassis | La Ciotat
          </h2>
          <BannerCta />

          {/* <a href="tel:+33442018001">
          <h3
            style={{
              margin: 0,
              fontWeight: 900,
              backgroundColor: 'white',
              color: theme.palette.primary.main,
              display: 'inline-block',
              padding: '0 1rem',
              marginTop: '1rem',
            }}>
            +33 4 42 01 80 01
          </h3>
          </a> */}
        </div>
      </div>
    </div>
  );
}
