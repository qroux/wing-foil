import LanguageSwitchBtn from '../src/components/molecules/LanguageSwitchBtn';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider as AppProvider } from '../src/context/AppContext';

describe('AppContext', () => {
  it('Render languageSwitchBtn with AppProvider context', () => {
    render(
      <AppProvider>
        <LanguageSwitchBtn />
      </AppProvider>
    );
    const button = document.querySelector('[data-cypress="langSwitch"]');
    expect(button).not.toBeNull();
  });
});

export {};
