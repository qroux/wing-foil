import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Button, Container, styled, useTheme } from '@mui/material';

import AnimatedPage from './_animatedPage';
import { NavHeight } from '../src/components/layout/Navbar';
import Link from 'next/link';
import Image from 'next/image';

const PresContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    flexDirection: 'column',
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    marginTop: '5rem',
    marginBottom: '5rem',
  },
}));

const Home: NextPage = () => {
  const theme = useTheme();

  return (
    <AnimatedPage>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div
        className='page__layout'
        style={{
          height: '50vh',
          width: '100%',
          display: 'flex',
          // marginTop: NavHeight,
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
              }}>
              Cassis | La Ciotat
            </h2>
            {/* <div
              style={{
                transform: 'translateY(4.5rem)',
              }}>
              <Link href='/cours' passHref>
                <Button variant='outlined' color='inherit'>
                  Découvrir
                </Button>
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      <main>
        <PresContainer
          maxWidth='lg'
          className='presentation'
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <div
            className='col__left'
            style={{
              flex: 0.7,
              marginBottom: '2em',
              paddingRight: '1.5rem',
            }}>
            <h3
              style={{
                fontSize: '2rem',
                fontWeight: 600,
              }}>
              Qu’est ce que le Wing Foil
            </h3>

            <p>
              La Wing est une aile légère et maniable qui vous tracte et vous
              permet de décoller au-dessus de la surface de l’eau, grâce au foil
              fixé sous la planche.
            </p>
            <p>
              Vous retrouverez les sensations du kitesurf, du surf et de la
              planche à voile. Un mix de tous les sports de glisse mais avec un
              apprentissage plus rapide et ludique.
            </p>
            <p>
              La Wing vous procure des sensations uniques et un sentiment de
              liberté.
            </p>
          </div>
          <div
            className='col__right'
            style={{
              // border: '1px solid black',
              flex: 0.3,
            }}>
            <div
              className='image__container'
              style={{
                backgroundImage: 'url(/sylvain-min.webp)',
                backgroundSize: 'cover',
                width: '100%',
                height: '100%',
                minHeight: '12rem',
                backgroundPosition: 'center',
              }}
            />
          </div>
        </PresContainer>
        <PresContainer
          maxWidth='lg'
          className='presentation'
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <div
            className='col__left'
            style={{
              flex: 0.7,
              marginBottom: '2em',
              paddingRight: '1.5rem',
            }}>
            <h3
              style={{
                fontSize: '2rem',
                fontWeight: 600,
              }}>
              Par où commencer ?
            </h3>

            <p>L’initiation se déroule en trois étapes :</p>
            <ul
              style={{
                listStyleType: 'square',
              }}>
              <li>Maniement de l’aile à terre.</li>
              <li>
                Navigation sur une planche de paddle ou planche à voile sans
                foil.
              </li>
              <li>
                Navigation avec la planche de Wingfoil et premiers décollages !
              </li>
            </ul>
            <p>
              Une session de foil tracté par un bateau pourra être proposé aux
              initiations d’une heure et les jours sans vent.
            </p>
            <p style={{ fontWeight: 'bold' }}>
              * Matériel adapté à tous les niveaux et tous les gabarits
            </p>
          </div>
          <div
            className='col__right'
            style={{
              // border: '1px solid black',
              flex: 0.3,
            }}>
            <div
              className='image__container'
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 0.3)), url(/foil-1-min.webp)',
                backgroundSize: 'cover',
                width: '100%',
                height: '100%',
                minHeight: '12rem',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Button
                href='/cours'
                color='error'
                variant='contained'
                size='large'
                style={{
                  fontWeight: 'bold',
                  // color: 'white',
                }}>
                Réserver une session
              </Button>
            </div>
          </div>
        </PresContainer>
      </main>
    </AnimatedPage>
  );
};

export default Home;
