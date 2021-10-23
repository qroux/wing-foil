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
    height: `100vh`,
  },
}));

const Home: NextPage = () => {
  return (
    <AnimatedPage>
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
          top: 0,
          left: 0,
          objectFit: 'cover',
          zIndex: -1,
          width: '100%',
        }}>
        <source src='/foil.mp4' type='video/mp4' />
        <Container maxWidth='xl'>
          <h1>TO DO</h1>
          <ul>
            <li>Cypress</li>
            <li>Jest</li>
            <li>
              <s>Storybook</s>
            </li>
            <li>------</li>
            <li>
              <s>Material Ui</s>
            </li>
            <li>
              <s>Framer motion</s>
            </li>
            <li>
              <s>Page transition</s>
            </li>
            <li>styled components ?</li>
          </ul>
        </Container>
      </VideoContainer>
    </AnimatedPage>
  );
};

export default Home;
