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
import {
  indexContentFirst,
  indexContentSecond,
} from '../src/content/indexContent';
import { langIndex } from '../src/utils/langIndex';

const Home: NextPage = () => {
  const {
    state: { lang },
  } = useContext(AppContext);

  const index = langIndex(lang);

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
            header={index ? 'About Wing Foil' : "Qu'est ce que le Wing Foil ?"}>
            {renderContent(indexContentFirst)}
          </ContentColumn>
          <ImageColumn imagePath={'/sylvain-min-gimp.webp'} />
        </PresContainer>

        <PresContainer>
          <ContentColumn
            header={index ? 'Wing Foil Initiation' : 'Par où commencer ?'}>
            <p>{indexContentSecond[index][0]}</p>
            <ul
              style={{
                listStyleType: 'square',
              }}>
              <li>{indexContentSecond[index][1]}</li>
              <li>{indexContentSecond[index][2]}</li>
              <li>{indexContentSecond[index][3]}</li>
            </ul>
            <p>{indexContentSecond[index][4]}</p>

            <p style={{ fontWeight: 'bold' }}>{indexContentSecond[index][5]}</p>

            <CallToAction label={index ? 'Try Out' : 'Découvrir'} />
          </ContentColumn>
          <ImageColumn imagePath={'/foil-1-min-gimp.webp'} />
        </PresContainer>
      </main>
    </AnimatedPage>
  );
};

export default Home;
