import React, { useContext } from 'react';
import { Context as AppContext } from '../../../src/context/AppContext';

const LanguageSwitchBtn = () => {
  const {
    state: { lang },
    actions: { toggleLang },
  } = useContext(AppContext);

  return (
    <div
      data-cypress='langSwitch'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '2rem',
        width: '3rem',
        cursor: 'pointer',
        marginLeft: '1.5rem',
      }}
      onClick={() => {
        toggleLang();
      }}>
      <img
        src={lang !== 'fr' ? '/flags/english.png' : '/flags/french.png'}
        width={25}
        height={25}
        alt={lang !== 'fr' ? 'switch to english' : 'passer en français'}
        style={{
          zIndex: 10,
        }}
      />
      <img
        src={lang === 'fr' ? '/flags/english.png' : '/flags/french.png'}
        width={17}
        height={17}
        alt={lang === 'fr' ? 'switch to english' : 'passer en français'}
        style={{
          transform: 'translateX(-0.55rem) translateY(-0.5rem)',
          zIndex: 9,
        }}
      />
    </div>
  );
};

export default LanguageSwitchBtn;
