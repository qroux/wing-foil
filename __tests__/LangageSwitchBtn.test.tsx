import LanguageSwitchBtn from '../src/components/molecules/LanguageSwitchBtn';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import {
  Context as AppContext,
  Provider as AppProvider,
} from '../src/context/AppContext';

describe('AppContext', () => {
  it('Render languageSwitchBtn with AppProvider context', () => {
    render(
      <AppProvider>
        <AppContext.Consumer>
          {(value) => (
            <LanguageSwitchBtn
              lang={value.state.lang}
              onClick={value.actions.toggleLang}
            />
          )}
        </AppContext.Consumer>
      </AppProvider>
    );

    const button = document.querySelector('[data-cypress="langSwitch"]');
    expect(button).not.toBeNull();
  });

  it('Action: toggleLang is called when button is clicked', () => {
    const mockToggleLang = jest.fn();

    render(
      <AppProvider>
        <LanguageSwitchBtn lang='fr' onClick={mockToggleLang} />
      </AppProvider>
    );

    const button = document.querySelector('[data-cypress="langSwitch"]');
    fireEvent.click(button);

    expect(mockToggleLang).toBeCalled();
  });

  it('State: lang FR -> ENG when onClick is called', () => {
    const { getByText } = render(
      <AppProvider>
        <AppContext.Consumer>
          {(value) => (
            <>
              <LanguageSwitchBtn
                lang={value.state.lang}
                onClick={value.actions.toggleLang}
              />
              <div>{value.state.lang}</div>
            </>
          )}
        </AppContext.Consumer>
      </AppProvider>
    );

    const button = document.querySelector('[data-cypress="langSwitch"]');
    expect(getByText('fr')).toBeDefined();

    fireEvent.click(button);
    expect(getByText('en')).toBeDefined();
  });
});

export {};
