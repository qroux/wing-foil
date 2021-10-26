import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, styled } from '@mui/material';

import AnimatedPage from './_animatedPage';
import { NavHeight } from '../src/components/layout/Navbar';

const VideoContainer = styled('video')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    height: '50vh',
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

      <VideoContainer
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
          // height: absolute ? '100vh' : `calc(100vh - ${NavHeight})`,
        }}>
        <source src='/foil.mp4' type='video/mp4' />
      </VideoContainer>
    </div>
  );
};

export default Home;
