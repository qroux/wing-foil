import { useContext } from "react";
import {Context as AppContext} from '../../../src/context/AppContext'



  const LanguageSwitchBtn = () => {
    const {
        // @ts-ignore
        state: { lang },
        // @ts-ignore
        toggleLang,
      } = useContext(AppContext);

    return (
        <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '2rem',
          width: '3rem',
          cursor: 'pointer',
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
            zIndex: 5
          }}
          
        />
          <img
          src={lang === 'fr' ? '/flags/english.png' : '/flags/french.png'}
          width={20}
          height={20}
          alt={lang === 'fr' ? 'switch to english' : 'passer en français'}
          style={{
            transform: 'translate3d(-0.5rem, -0.7rem, 0) scale(0.8)',
            zIndex: 4
          }}
        />
      </div>
    )
 

}


export default LanguageSwitchBtn