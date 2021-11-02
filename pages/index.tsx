import React, { useContext } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useTheme } from '@mui/material';

import { Context as AppContext } from '../src/context/AppContext';

import AnimatedPage from './_animatedPage';
import PresContainer from '../src/components/templates/PresContainer';
import ContentColumn from '../src/components/molecules/ContentColumn';
import ImageColumn from '../src/components/molecules/ImageColumn';
import CallToAction from '../src/components/atoms/CallToAction';
import { useLang } from '../src/hooks/useLang';
import { indexContentFirst } from '../src/content/indexContent';

const Home: NextPage = () => {
  const {
    // @ts-ignore
    state: { lang },
  } = useContext(AppContext);

  const index = useLang(lang);

  const renderContent = (content: string[][]) => {
    return content[index].map((line: string, id: number) => {
      return <p key={id}>{line}</p>;
    });
  };

  return (
    <AnimatedPage>
      <Head>
        <title>Wing Foil Cassis | La Ciotat</title>
        <meta
          name='description'
          content='Initiation et Cours de Wing Foil Cassis | La Ciotat'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <PresContainer>
          <ContentColumn
            header={
              index ? 'Wing Foil discovery' : "Qu'est ce que le Wing Foil ?"
            }>
            {renderContent(indexContentFirst)}
          </ContentColumn>
          <ImageColumn imagePath={'/sylvain-min-gimp.webp'} />
        </PresContainer>

        <PresContainer>
          <ContentColumn header={'Par où commencer ?'}>
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

            <CallToAction label={index ? 'Try Out' : 'Découvrir'} />
          </ContentColumn>
          <ImageColumn imagePath={'/foil-1-min-gimp.webp'} />
        </PresContainer>
      </main>
    </AnimatedPage>
  );
};

export default Home;
