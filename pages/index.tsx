import React from eact';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Button, Container, styled } from '@mui/material';

import AnimatedPage from './_animatedPage';
import { NavHeight } from '../src/components/layout/Navbar';
import Link from 'next/link';

const VideoContainer = styled('video')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    height: '55vh',
  },
  [theme.breakpoints.up('sm')]: {
    height: '70vh',
  },
  [theme.breakpoints.up('md')]: {
    height: '80vh',
  },
  [theme.breakpoints.up('lg')]: {
    height: `calc(100vh)`,
  },
}));

const Home: NextPage = () => {
  const absolute = true;
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* <VideoContainer
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: absolute ? 0 : NavHeight,
          left: 0,
          objectFit: 'cover',
          zIndex: -1,
          width: '100%',
          opacity: 0.05,
        }}>
        <source src='/foil.mp4' type='video/mp4' />
      </VideoContainer> */}

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
              'radial-gradient(rgba(0,0,0, 0.3), rgba(0,0,0,0)), url(/profil-2.png)',
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
                fontWeight: 400,
                margin: 0,
              }}>
              Wing Foil
            </h1>
            <h2
              style={{
                margin: 0,
              }}>
              La Ciotat
            </h2>
            <div
              style={{
                transform: 'translateY(4.5rem)',
              }}>
              <Link href='/cours' passHref>
                <Button variant='outlined' color='inherit'>
                  Découvrir
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main>
        <Container maxWidth='lg' className='presentation'>
          <h3>Qu’est ce que le Wing Foil</h3>
          <p>
            La Wing est une aile légère et maniable qui vous tracte et vous
            permet de décoller au-dessus de la surface de l’eau, grâce au foil
            fixé sous la planche. Des sensations uniques, accessibles et fun !!!
          </p>
          <p>
            Vous retrouverez les sensations du kitesurf, du surf et de la
            planche à voile. Un mix de tous les sports de glisse mais avec un
            apprentissage plus rapide et ludique. La Wing vous procure un
            sentiment de liberté.
          </p>
        </Container>
      </main>
    </div>
  );
};

export default Home;
