import React from 'react';
import CookieConsent from 'react-cookie-consent';
import * as gtag from '../../../lib/gtag';
import { useLang } from '../../hooks/useLang';

const text = {
  description: {
    content: [
      'Ce site utilise les cookies sans aucune raison valable',
      'This website uses cookies for no particular reason',
    ],
  },
  acceptBtn: {
    content: ["J 'accepte", 'Consent'],
  },
  declineBtn: {
    content: ['Je refuse', 'Refuse'],
  },
};

const btnStyle = {
  borderRadius: 3,
  color: 'white',
  fontWeight: 'bold',
};

export default function ConsentModal({ lang }: { lang: string }) {
  const langIndex = useLang(lang);

  return (
    <CookieConsent
      cookieName='TRACKER_CONSENT'
      enableDeclineButton
      location='bottom'
      buttonText={text.acceptBtn.content[langIndex]}
      buttonStyle={{
        ...btnStyle,
        backgroundColor: '#91C263',
      }}
      declineButtonText={text.declineBtn.content[langIndex]}
      declineButtonStyle={{
        ...btnStyle,
        backgroundColor: 'transparent',
      }}
      onAccept={() => gtag.consentGranted()}
      style={{ background: '#2B373B' }}
      expires={150}>
      {text.description.content[langIndex]}
    </CookieConsent>
  );
}
